using Aqua.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace WebApplication
{
    public class Startup
    {
        public Startup(IHostEnvironment env)
        {
            const string appSettings = "appsettings";
            IConfigurationBuilder builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile($"{appSettings}.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"{appSettings}.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            ConfigureAppServices(services);
        }

        public static void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseResponseCompression();

            app.UseHttpsRedirection();
            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = content =>
                {
                    if (!content.File.Name.EndsWith(".js.gz")) return;
                    content.Context.Response.Headers["Content-Type"] = "text/javascript";
                    content.Context.Response.Headers["Content-Encoding"] = "gzip";
                }
            });

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapAreaControllerRoute(
                    name: "default",
                    areaName: "app",
                    pattern: "{area:exists}/{controller}/{action=Index}/{id?}");
                endpoints.MapFallbackToAreaController("Index", "Home", "App");
                endpoints.MapDefaultControllerRoute().RequireAuthorization();
            });
        }

        private void ConfigureAppServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationContext>(options =>
                options.UseNpgsql(Configuration.GetConnectionString("PostgreSql")));
            
            services.AddControllersWithViews().AddNewtonsoftJson((options) =>
            {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                options.SerializerSettings.DefaultValueHandling = DefaultValueHandling.Include;
                options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
            }).AddControllersAsServices();
            services.AddAuthorization();
            services.AddResponseCompression(options =>
            {
                options.EnableForHttps = true;
                options.MimeTypes = new[] { "application/javascript" };
            });
        }

        private IConfigurationRoot Configuration { get; }
    }
}
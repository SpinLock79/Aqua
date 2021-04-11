using Aqua.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Aqua.Data
{
    public sealed class ApplicationContext: DbContext
    {
        public ApplicationContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Account>(Mapping.Account.Configure);
            builder.Entity<Role>(Mapping.Role.Configure);
        }
        
        public DbSet<Role> Roles { get; set; }
        public DbSet<Account> Accounts { get; set; }
    }
}
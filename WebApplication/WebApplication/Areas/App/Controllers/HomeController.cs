using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication.Properties;

namespace WebApplication.Areas.App.Controllers
{
    [Area("App")]
    public class HomeController : Controller
    {
        // GET
        [AllowAnonymous]
        public IActionResult Index()
        {
            ViewBag.Title = Resources.Title;
            return View();
        }
    }
}
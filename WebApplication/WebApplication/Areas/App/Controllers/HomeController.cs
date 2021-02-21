using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Areas.App.Controllers
{
    [Area("App")]
    public class HomeController : Controller
    {
        // GET
        [AllowAnonymous]
        public IActionResult Index()
        {
            return View();
        }
    }
}
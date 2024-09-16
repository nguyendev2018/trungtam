using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Lib_GTVL.DAO;
namespace GTVL.Controllers
{
    public class NewsController : Controller
    {
        // GET: News
        public ActionResult Index()
        {
            var news = new News_Dao();
            return View();
        }

        //[ChildActionOnly]
        //public PartialViewResult News_share() //=> Tên Phương thức là tên view
        //{
        //    var model = new News_Dao().ListAll();
        //    return PartialView(model);
        //}

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Lib_GTVL.DAO;
using System.Data.Entity;
using Lib_GTVL.EF;

namespace GTVL.Controllers
{
    public class HomeController : Controller
    {
        public News_Dao newsdao = new News_Dao();
        public Slide_TinTuc_Dao tintuc_8 = new Slide_TinTuc_Dao();
        public Slide_Tin_HotDao tinhot_4 = new Slide_Tin_HotDao();
        public Slides_Dao slidemain = new Slides_Dao();
        public ViecLamMoiNhat_Dao vieclammoi = new ViecLamMoiNhat_Dao();

        public ActionResult Index()
        {
            // TinTuc
            var newsList1 = newsdao.ListAll();    // Gọi method ListAll() từ DAO để lấy danh sách tin tức
            ViewBag.Tintuc = newsList1;          // Lưu dữ liệu vào ViewBag

            //TinHot_4
            var newSlide_4 = tinhot_4.ListAll_4();
            ViewBag.SlideTinHot = newSlide_4;

            //TinTuc_8
            var newSlide_8 = tintuc_8.ListAll();
            ViewBag.SlideTinTuc = newSlide_8;

            //Slide_Main
            var SlideMain = slidemain.ListAll_Slide();
            ViewBag.SlideMain = SlideMain;

            //Viec Lam Moi
            var vieclam = vieclammoi.ListAll_20();
            ViewBag.vieclammoi = vieclam;


            return View();  // Truyền dữ liệu vào View
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }
    }
}
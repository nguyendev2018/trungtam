using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lib_GTVL.EF;
using Lib_GTVL.CustomModel;


namespace Lib_GTVL.DAO
{
    public class Slide_Tin_HotDao
    {
        GTVL_Model db = null;
        public Slide_Tin_HotDao()
        {
            db = new GTVL_Model();
        }

        public List<CustomSlideTinHot4Model> ListAll_4()
        {
            var newsSlide_4 = db.Database.SqlQuery<CustomSlideTinHot4Model>("TinTucThongBao4_MinhHung").ToList();
            return newsSlide_4;
        }

    }
}

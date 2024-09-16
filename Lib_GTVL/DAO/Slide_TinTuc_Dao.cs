using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lib_GTVL.EF;
using Lib_GTVL.CustomModel;

namespace Lib_GTVL.DAO
{
    public class Slide_TinTuc_Dao
    {
        GTVL_Model db = null;
        public Slide_TinTuc_Dao()
        {
            db = new GTVL_Model();
        }
        public List<CustomSlideTinTuc8Model> ListAll()
        {
            var newSlide_8 = db.Database.SqlQuery<CustomSlideTinTuc8Model>("TinTucThongBao8_MinhHung").ToList();
            return newSlide_8;
        }
    }
}

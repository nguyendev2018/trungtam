using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lib_GTVL.EF;
using Lib_GTVL.CustomModel;

namespace Lib_GTVL.DAO
{
    public class Slides_Dao
    {
        GTVL_Model db = null;
        public Slides_Dao()
        {
            db = new GTVL_Model();
        }

        public List<CustomSlideMain> ListAll_Slide()
        {
            var SlideMain = db.Database.SqlQuery<CustomSlideMain>("Slide_Main_MinhHung").ToList();
            return SlideMain;
        }
    }
}

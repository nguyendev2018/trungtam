using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lib_GTVL.EF;
using Lib_GTVL.CustomModel;

namespace Lib_GTVL.DAO
{
    public class ViecLamMoiNhat_Dao
    {
        GTVL_Model db = null;
        public ViecLamMoiNhat_Dao()
        {
            db = new GTVL_Model();
        }

        public List<CustomViecLamMoiNhat> ListAll_20()
        {
            var Vieclam_Moi = db.Database.SqlQuery<CustomViecLamMoiNhat>("ViecLamMoi_MinhHung").ToList();
            return Vieclam_Moi;
        }
    }
}

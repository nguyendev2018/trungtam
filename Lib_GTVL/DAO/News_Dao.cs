using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lib_GTVL.EF;
using System.Data.Entity.Infrastructure;// K có cũng đc
using System.Data.SqlClient; // K có cũng đc
using Lib_GTVL.CustomModel;

// class lấy all database
namespace Lib_GTVL.DAO
{
    public class News_Dao
    {
        GTVL_Model db = null;
        public News_Dao()
        {
            db = new GTVL_Model();
        }

        //Method để lấy danh sách tin tức từ database
        public List<CustomTinTuc70Model> ListAll()
        {
            var newsList = db.Database.SqlQuery<CustomTinTuc70Model>("GetNews_MinhHung").ToList();
            return newsList;
        }
    }
}


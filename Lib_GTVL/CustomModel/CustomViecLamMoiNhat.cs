using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lib_GTVL.CustomModel
{
    public class CustomViecLamMoiNhat
    {
        // Dùng 3 table trong csdl => DOANHNGHIEP | DOANHNGHIEP_TUYENDUNG | DM_DIACHI
        public string TenDeTuyenDuug { get; set; } //1
        public string TenDoanhNghiep { get; set; } //2
        public int SoLuongTuyen { get; set; } //3
        public int YeuCauTuoiTu { get; set; } //4
        public string Logo { get; set; } //5
      //  public string NgayHetHan { get; set; } //6

        // kinh nghiem     //7
        // Gioi Tinh      //8
        // Dia Diem      //9
    }
}

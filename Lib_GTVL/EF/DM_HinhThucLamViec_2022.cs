namespace Lib_GTVL.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class DM_HinhThucLamViec_2022
    {
        [Key]
        public int HinhThucLamViec_ID { get; set; }

        [StringLength(2000)]
        public string HinhThucLamViec_Ten { get; set; }

        public bool? KichHoat { get; set; }
    }
}

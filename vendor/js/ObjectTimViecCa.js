var pageCall = {
page1: function ThemTrinhDoChuyenMon(Id, KhID, TrinhDoCMKT_ID, ChuyenNganh,NgayTao,NguoiTao) {
    this.KHACHHANG_TIMVIEC_TRINHDO_ID = Id;
    this.KH_ID = KhID;
    this.TRINHDOCMKT_ID = TrinhDoCMKT_ID;
    this.MOTACHUYENNGANH = ChuyenNganh;
    this.NGAYTAO = NgayTao;
    this.NGUOITAO = NguoiTao;
},
page2: function ThemTrinhDoNgoaiNgu(Id, KhId, TrinhDoNN_ID, ChungChi,KhaNangSuDung,GhiChu,NgayTao,NguoiTao) {
    this.KHACHHANG_TIMVIEC_NGOAINGU_ID = Id;
    this.KH_ID = KhId;
    this.NGHIEPVU_NGOAINGU_ID = TrinhDoNN_ID;
    this.CHUNGCHINGOAINGU = ChungChi;
    this.KHANANGSUDUNG = KhaNangSuDung;
    this.GHICHU = GhiChu;
    this.NGAYTAO = NgayTao;
    this.NGUOITAO = NguoiTao;

},
    page3: function ThemTrinhDoTinHoc(Id, KhID, TrinhDoTH_ID,KhaNangSuDung,GhiChu,NgayTao,NguoiTao) {
        this.KHACHHANG_TIMVIEC_TINHOC_ID = Id;
        this.KH_ID = KhID;
        this.NGHIEPVU_TINHOC_ID = TrinhDoTH_ID;
        this.KHANANGSUDUNG = KhaNangSuDung;
        this.GHICHU = GhiChu;
        this.NGAYTAO = NgayTao;
        this.NGUOITAO = NguoiTao;
    },
    page4: function ThemKinhNghiemLamViec(Id, KhID, TenCongTy,ChucVu,TuThang,DenThang,CongViecChinh,DaLamViecNuocNgoai,NgayTao,NguoiTao) {
        this.KHACHHANG_KINHNGHIEM_LAMVIEC_ID = Id;
        this.KH_ID = KhID;
        this.TENCONGTY = TenCongTy;
        this.CHUCVU = ChucVu;
        this.TUTHANG = TuThang;
        this.DENTHANG = DenThang;
        this.CONGVIECCHINH = CongViecChinh;
        this.DALAMVIECNUOCNGOAI = DaLamViecNuocNgoai;
        this.NGAYTAO = NgayTao;
        this.NGUOITAO = NguoiTao;
    }
}
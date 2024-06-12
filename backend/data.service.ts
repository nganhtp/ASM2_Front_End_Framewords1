import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sanpham } from 'app/pages/plus/plus.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api/data';
  private apiUrlnv = 'http://localhost:3000/api/employee';
  constructor(private http: HttpClient) { }
  //sanpham
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addData(product: sanpham): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      MaSanPham: product.MaSanPham,
      TenSanPham: product.TenSanPham,
      HinhAnh: product.HinhAnh,
      Gia: product.Gia,
      GiaKhuyenMai: product.GiaKhuyenMai,
      MaDanhMuc: product.MaDanhMuc,
      SoLuong: product.SoLuong,
      MoTa: product.MoTa,
      Hot: product.Hot,
      TrangThai: product.TrangThai
    });
  }

  editData(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  putData(product: any, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`,
      {
      MaSanPham: product.MaSanPham,
      TenSanPham: product.TenSanPham,
      HinhAnh: product.HinhAnh,
      Gia: product.Gia,
      GiaKhuyenMai: product.GiaKhuyenMai,
      MaDanhMuc: product.MaDanhMuc,
      SoLuong: product.SoLuong,
      MoTa: product.MoTa,
      Hot: product.Hot,
      TrangThai: product.TrangThai
      });
  }

  //nhanvien
  getDataNV(): Observable<any> {
    return this.http.get<any>(this.apiUrlnv);
  }

  ondeleteData(idnv: number): Observable<any> {
    return this.http.delete(`${this.apiUrlnv}/${idnv}`);
  }
  postEmployee(employee:any): Observable<any> {
    return this.http.post(this.apiUrlnv, {
      Email: employee.Email,
      MatKhau: employee.MatKhau,
      HoTen: employee.HoTen,
      DiaChi: employee.DiaChi,
      SDT: employee.SDT,
      Admin: employee.Admin,
      Anh: null,
      ChucVu: employee.ChucVu,
      LyLich: employee.LyLich
    });
  }
  getDataById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrlnv}/${id}`);
  }
  putEmployee(employee: any, id: number): Observable<any> {
    return this.http.put(`${this.apiUrlnv}/${id}`,
      {
        Email: employee.Email,
        MatKhau: employee.MatKhau,
        HoTen: employee.HoTen,
        DiaChi: employee.DiaChi,
        SDT: employee.SDT,
        Admin: employee.Admin,
        Anh: null,
        ChucVu: employee.ChucVu,
        LyLich: employee.LyLich
      });
  }
}



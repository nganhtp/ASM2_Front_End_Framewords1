const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());




const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'asm_nodejs'
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

//Sản Phẩm
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM sanpham';
  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});
app.get('/api/data/:MaSanPham', (req, res) => {
  const sql = 'SELECT * FROM sanpham WHERE MaSanPham = ?';
  connection.query(sql, [req.params.MaSanPham], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.json({ data: result[0] });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });
});
app.delete('/api/data/:id', (req, res) => {
  let sql = 'DELETE FROM sanpham WHERE MaSanPham = ?';
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Product deleted' });
  });
});
app.post('/api/data', (req, res) => {
  const { TenSanPham, Gia, GiaKhuyenMai, MaDanhMuc, SoLuong, MoTa, Hot, TrangThai, HinhAnh } = req.body;
  let sql = `INSERT INTO sanpham (TenSanPham, Gia, GiaKhuyenMai, MaDanhMuc, SoLuong, MoTa, Hot, TrangThai, HinhAnh) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  connection.query(sql, [TenSanPham, Gia, GiaKhuyenMai, MaDanhMuc, SoLuong, MoTa, Hot, TrangThai, HinhAnh], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Product added', productId: result.insertId });
  });
});
app.put('/api/data/:id', (req, res) => {
  const { id } = req.params;
  const { TenSanPham, Gia, GiaKhuyenMai, MaDanhMuc, SoLuong, MoTa, Hot, TrangThai, HinhAnh } = req.body;
  const sql = 'UPDATE sanpham SET TenSanPham = ?, Gia = ?, GiaKhuyenMai = ?, MaDanhMuc = ?, SoLuong = ?, MoTa = ?, Hot = ?, TrangThai = ?, HinhAnh = ? WHERE MaSanPham = ?';
  connection.query(sql, [TenSanPham, Gia, GiaKhuyenMai, MaDanhMuc, SoLuong, MoTa, Hot, TrangThai, HinhAnh,id], (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

//Nhân Viên
app.get('/api/employee', (req, res) => {
  const sql = 'SELECT * FROM nhanvien';
  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});
app.get('/api/employee/:MaNhanVien', (req, res) => {
  const sql = 'SELECT * FROM nhanvien WHERE MaNhanVien = ?';
  connection.query(sql,[req.params.MaNhanVien], (err, results) => {
    if(err)throw err;
    if(results.length > 0){
      res.json({ data: results[0]});
    }else{
      res.status(404).json({message: 'Employee not found'})
    }
  });
});
app.delete('/api/employee/:id', (req, res) => {
  let sql = 'DELETE FROM nhanvien WHERE MaNhanVien = ?';
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Employee deleted' });
  });
});
app.post('/api/employee', (req, res) => {
  const { Email, MatKhau, HoTen, DiaChi, SDT, Admin, Anh, ChucVu, LyLich } = req.body;
  const sql = 'INSERT INTO nhanvien (Email, MatKhau, HoTen, DiaChi, SDT, Admin, Anh, ChucVu, LyLich) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql, [Email, MatKhau, HoTen, DiaChi, SDT, Admin, Anh, ChucVu, LyLich], (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});
app.put('/api/employee/:id', (req, res) => {
  const { id } = req.params;
  const { Email, MatKhau, HoTen, DiaChi, SDT, Admin, Anh, ChucVu, LyLich } = req.body;
  const sql = 'UPDATE nhanvien SET Email = ?, MatKhau = ?, HoTen = ?, DiaChi = ?, SDT = ?, Admin = ?, Anh = ?, ChucVu = ?, LyLich = ? WHERE MaNhanVien = ?';
  connection.query(sql, [Email, MatKhau, HoTen, DiaChi, SDT, Admin, Anh, ChucVu, LyLich,id], (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

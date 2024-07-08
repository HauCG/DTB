function tinhDiemTrungBinh() {
    const diemToan = parseFloat(document.getElementById('diemToan').value);
    const diemVan = parseFloat(document.getElementById('diemVan').value);
    const diemAnh = parseFloat(document.getElementById('diemAnh').value);

    if (
        isNaN(diemToan) ||
        isNaN(diemVan) ||
        isNaN(diemAnh) ||
        diemToan < 0 ||
        diemToan > 10 ||
        diemVan < 0 ||
        diemVan > 10 ||
        diemAnh < 0 ||
        diemAnh > 10
    ) {
        alert('Điểm nhập không hợp lệ. Vui lòng nhập số từ 0 đến 10.');
        return;
    }

    const tongDiem = diemToan + diemVan + diemAnh;
    const diemTrungBinh = tongDiem / 3;

    // Hiển thị kết quả bằng alert
    alert(`Điểm trung bình: ${diemTrungBinh.toFixed(2)}`);
}

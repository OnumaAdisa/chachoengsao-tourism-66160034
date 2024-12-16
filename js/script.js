// ฟังก์ชันเพื่อจับเหตุการณ์เมื่อฟอร์มถูกส่ง
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันไม่ให้ฟอร์มถูกส่งไปที่เซิร์ฟเวอร์

    // รับข้อมูลจากฟอร์ม
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // แสดงข้อความตอบกลับ
    alert(`ขอบคุณ, ${name}! เราได้รับข้อความจากคุณแล้ว.`);
    
    // ล้างฟอร์มหลังจากการส่ง
    document.querySelector('form').reset();
});

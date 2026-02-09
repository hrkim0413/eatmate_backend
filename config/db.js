const mysql = require('mysql'); // 또는 mysql2

const pool = mysql.createPool({
  host: 'dadtabase',   // ← 오타 아니면 그대로 유지
  user: 'root',
  password: '1234',
  database: 'kdt',

  // 풀 옵션 (권장)
  connectionLimit: 10,       // 동시에 최대 10개 커넥션
  waitForConnections: true, // 커넥션 없으면 대기
  queueLimit: 0             // 대기열 제한 없음
});

// 최초 연결 테스트 (선택)
pool.getConnection((err, conn) => {
  if (err) {
    console.error('❌ MYSQL Pool 연결 실패:', err);
  } else {
    console.log('✅ MYSQL Pool 연결 성공');
    conn.release(); // 반드시 반환
  }
});

module.exports = pool;

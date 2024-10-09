async function getData() {
  // ユーザーリストを定義
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  
  // 3秒後にフルネームのリストを取得
  const result = await test(userList);
  return result; // フルネームのリストを返す
}

function test(userList) {
  // Promiseを返す
  return new Promise((resolve) => {
    setTimeout(() => {
      // 各ユーザーオブジェクトにフルネームを追加
      const updatedUserList = userList.map(user => {
        return {
          ...user, // 他のプロパティを維持
          full_name: `${user.family_name} ${user.first_name}` // フルネームを追加
        };
      });
      console.log(updatedUserList)
      resolve(updatedUserList); // フルネームが追加されたリストを解決
    }, 3000); // 3秒遅延
  });
}


export const fetchUserInfo = async (id: string) => {
  try {
    const accessToken = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("accessToken="))
      ?.split("=")[1];

    if (!accessToken) {
      throw new Error("accessToken이 없습니다.");
    }

    const response = await fetch(`http://localhost:4000/api/admin:${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const res = await response.json();
      document.cookie = `accessToken=${res.data.cart.id}; path=/`;
    } else {
      throw new Error("사용자 정보를 가져오는 데 실패했습니다.");
    }
  } catch (err) {
    console.log(err);
  }
};

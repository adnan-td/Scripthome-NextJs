const hostUrl = "http://localhost:8000";

export async function getAllAdmins() {
  const response = await fetch(`${hostUrl}/request/admins`);
  return await response.json();
}

export async function addAdmin(Admin) {
  const response = await fetch(`/request/admins/`, {
    method: "POST",
    body: JSON.stringify(Admin),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  await response;
}

export async function updateAdmin(Admin, id) {
  const response = await fetch(`/request/admins/:${id}`, {
    method: "PUT",
    body: JSON.stringify(Admin),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  await response;
}

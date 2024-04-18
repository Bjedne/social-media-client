import * as storage from "../../storage/index";
import { login } from "./login";

jest.mock("../../storage/index");

const token = "18635241234234";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: token }),
  }),
);

describe("login", () => {
  beforeEach(() => {
    storage.remove();
  });

  it("stores access token in localStorage upon login", async () => {
    await login("test@fake-noroff-email.com", "password");

    expect(storage.save).toHaveBeenCalledWith("token", token);
  });
});

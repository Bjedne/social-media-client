import { logout } from "./logout";
import * as storage from "../../storage/index";

jest.mock("../../storage/index");

describe("logout", () => {
  it("removes token and profile from localStorage", () => {
    logout();

    expect(storage.remove).toHaveBeenCalledTimes(2);
    expect(storage.load("token")).toEqual(undefined);
    expect(storage.load("profile")).toEqual(undefined);
  });
});

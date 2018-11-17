export class ApiEndPoint {
  public static API = "http://127.0.0.1:8000/api/v1/";

  public static TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNmYTY0YjVmNDlhNzBiY2JkMjJiNjMyY2Y4Y2M1N2M0NzMwYTJiYjcyMGU2MTM4MDM0N2M0MWM3NTYxMTFkMzliMTZjYTgwN2IxYWY4MTQzIn0.eyJhdWQiOiIxIiwianRpIjoiM2ZhNjRiNWY0OWE3MGJjYmQyMmI2MzJjZjhjYzU3YzQ3MzBhMmJiNzIwZTYxMzgwMzQ3YzQxYzc1NjExMWQzOWIxNmNhODA3YjFhZjgxNDMiLCJpYXQiOjE1NDI0MzIyMTYsIm5iZiI6MTU0MjQzMjIxNiwiZXhwIjoxNTczOTY4MjE2LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.cdcbCN5Up26fSsMsDcxQrEnmRA08mYH6DAM_ooY7kZgbQCMUXUsmSuNO5hbkaanCxc8MCNM3GT96vFnu_6MNgloCUqkrbTmGUHJv6r_XBWyNjBKUuK4NxcHkTpz96Jc25VrThK-0JFB6KvvN2IdoP_SM6wGNoyck59udZcOxLV9qjloFTfgvWTiQma1rRkhri-XkNmdg3xCsa_vSnTRKaTFOWOGn5S4Vs67agFJUddvpJuiC7636Jiafic16YQNV03kxt0GBwf9f0Vfn8DC6XepKPB0UQgt6JJL6RGg0zyCg5Gr9bOgFvgU51VqnwW1ZFeU9McfMtp0CebD7U1dRvEy5NNBFvq0XYHLzQ5trSdtJquozRcuIAiR93msVxxVQcB9XeAJtD58T-3l_XccFVbSIxCWpizE6ZuBqPA4JnUUE8H3sUOapswe0-lBKv3xg7E64fM3f1H9pbU9-E5LjED1jQvN9NVTVwzYi9knOwt5OtXQa_unfpQHiM06X-zoGBQV_SCZjcbMTBI-hiIq62EdmcSg-kbLJBIsGC-NR_Bn8QkEaESh0ZCUS7janATug3XVm0Zld6o1PysUH9XyHtcPQDrScOy9xxqyykSNXWck6EuJzJF5xx4wzYF4t_mth4UTjNakFvE9X_VkYftkFl5aN6JIzLtpBbuHbKQeBImo";
  // public static API = "https://politicos.hunter-app.com/v1/";

  // USER
  public static USERS_LOGIN = ApiEndPoint.API + "users/login";
  public static USERS_CREATE = ApiEndPoint.API + "users/create";
  public static USERS_PROFILE = ApiEndPoint.API + "users/profile";
  public static USERS_UPDATE = ApiEndPoint.API + "users/update";

  // CONSOLES
  public static CONSOLES_ALL = ApiEndPoint.API + "consoles/all";

  // CATEGORYS
  public static CATEGORYS_OF_CONSOLE = ApiEndPoint.API + "categorys/ofConsole/";

  // GAMES
  public static GAMES_OF_CONSOLE = ApiEndPoint.API + "games/ofConsole";

  // STEPS
  public static STEPS_OF_GAME = ApiEndPoint.API + "steps/stepsOfGame/";

  // GUIDES
  public static GUIDE_OF_STEP = ApiEndPoint.API + "guides/guideOfStep/";


  public static STORAGE_TOKEN = '_token';

}

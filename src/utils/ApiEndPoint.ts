export class ApiEndPoint {
  public static API = "http://guide.hunter-app.com/api/v1/";

  // USER
  public static USERS_LOGIN = ApiEndPoint.API + "users/login";
  public static USERS_CREATE = ApiEndPoint.API + "users/create";
  public static USERS_PROFILE = ApiEndPoint.API + "users/profile";
  public static USERS_UPDATE = ApiEndPoint.API + "users/update";
  public static USERS_UPDATE_PICTURE = ApiEndPoint.API + "users/updateProfilePicture";
  public static USERS_UPDATE_BACKGROUND = ApiEndPoint.API + "users/updateProfileBackgroundPicture";

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
  public static GUIDE_FAVORITES = ApiEndPoint.API + "guides/allFavoritesGuides";
  public static GUIDE_SAVE_FAVORITES = ApiEndPoint.API + "guides/saveGuideFavorite/";

  public static STORAGE_TOKEN = '_token';

}

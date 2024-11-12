import { Quotes } from "../components/Quotes";
import { Auth } from "../components/Auth";
export const SignIn = function () {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Auth type="signin" />
      <div className="hidden lg:block">
        <Quotes />
      </div>
    </div>
  );
};

import { Home } from "../Pages/homePage";
import { Create } from "../Pages/createPage";
import { BrandBiz } from "../Pages/brandBizPage";


const routes = {
	"/": () => <Home />,
	"/create": () => <Create />,
    "/brand": () => <BrandBiz />
};


export default routes;
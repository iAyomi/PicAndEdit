import { Home } from "../Pages/homePage";
import { Create } from "../Pages/createPage";
import { BrandBiz } from "../Pages/brandBizPage";
import { RemoveBgPage } from "../Pages/removeBgPage";
import { VectorizePage } from "../Pages/vectorizePage";
import { GenerateTexturePage } from "../Pages/generateTexturePage";
import { AddEffectsPage } from "../Pages/addEffectsPage";
import { AddMasksPage } from "../Pages/addMasksPage";
import { AdjustImagePage } from "../Pages/adjustImagePage";
import { TransferStylePage } from "../Pages/transferStylePage";
import { UpscaleEnhancePage } from "../Pages/upscaleEnhancePage";
import { UpscaleFacePage } from "../Pages/upscaleFacePage";
import { UpscalePage } from "../Pages/upscalePage";
import { UpscaleUltraPage } from "../Pages/upscaleUltraPage";
import { UploadedPicturePage } from "../Pages/uploadedPicturePage";



const routes = {
	"/": () => <Home />,
	"/upload": () => <Create />,
    "/brand": () => <BrandBiz />,
	"/removebackground": () => <RemoveBgPage />,
	"/upscale": () => <UpscalePage />,
	"/upscaleultra": () => <UpscaleUltraPage />,
	"/upscaleenhance": () => <UpscaleEnhancePage />,
	"/upscaleface": () => <UpscaleFacePage />,
	"/addeffects": () => <AddEffectsPage />,
	"/addmasks": () => <AddMasksPage />,
	"/adjustimage": () => <AdjustImagePage />,
	"/transferstyle": () => <TransferStylePage />,
	"/generatetexture": () => <GenerateTexturePage />,
	"/vectorize": () => <VectorizePage />,
	"/uploadedpicture": () => <UploadedPicturePage />
};


export default routes;
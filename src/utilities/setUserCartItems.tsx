import axios from "axios";
import { payloadType } from "../Store/StoreSlices/authorizationSlice/authorization";
import { cartPayload } from "../components/Cart/types";
const setCartItemsEndPoint = import.meta.env.VITE_SET_CART_ITEMS_ENDPOINT;
export default async function setUserCartItems(
  responseData: payloadType,
  cartProducts: cartPayload[]
) {
  try {
    await axios.post(
      setCartItemsEndPoint,
      {
        userId: responseData.id,
        userData: cartProducts,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Failed Request:", error);
  }
}

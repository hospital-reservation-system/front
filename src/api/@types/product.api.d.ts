/** 상품 조회 요청 */
type getProductsRequestPath = {
    hospital: string;
};

type getProductsRequestParams = {};
type getProductsRequestBody = {};

/** 상품 조회 요청 */
type getProductsRequest = {
    params?: getProductsRequestParams;
    path: getProductsRequestPath;
    body?: getProductsRequestBody;
};

/** 상품 조회 응답 */
type getProductsResponse = Array<IProductResponseDTO>;

/** 상품 상세 조회 요청  */
type getProductByIdRequestPath = {
    id: string;
};

type getProductByIdRequestParams = {};
type getProductByIdRequestBody = {};

/** 상품 상세 조회 요청 */
type getProductByIdRequest = {
    params?: getProductByIdRequestParams;
    path: getProductByIdRequestPath;
    body?: getProductByIdRequestBody;
};

/** 상품 상세 조회 응답 */
type getProductByIdResponse = IProductResponseDTO | null;

/** 상품 생성 요청 */
type createProductRequestPath = {};
type createProductRequestParams = {};

type createProductRequestBody = {
    id?: string;
    name: string;
    price: number;
    description: string;
    selective?: string[];
    hospital: string;
};

/** 상품 생성 요청 */
type createProductRequest = {
    params?: createProductRequestParams;
    path?: createProductRequestPath;
    body: createProductRequestBody;
};

/** 상품 생성 응답 */
type createProductResponse = IProductResponseDTO;

/** 상품 수정 요청  */
type updateProductRequestPath = {};
type updateProductRequestParams = {
    id: string;
};

type updateProductRequestBody = Omit<IProduct, "id"> & {
    hospital: string;
};

/** 상품 수정 요청 */
type updateProductRequest = {
    params?: updateProductRequestParams;
    path: updateProductRequestPath;
    body: updateProductRequestBody;
};

/** 상품 수정 응답 */
type updateProductResponse = void;

/** 상품 삭제 요청  */
type deleteProductRequestPath = {};
type deleteProductRequestParams = {
    id: string;
};

type deleteProductRequestBody = {};

/** 상품 삭제 요청 */
type deleteProductRequest = {
    params?: deleteProductRequestParams;
    path: deleteProductRequestPath;
    body?: deleteProductRequestBody;
};

/** 상품 삭제 응답 */
type deleteProductResponse = void;

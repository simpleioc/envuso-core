/**
 * *INSERT FLASHING WARNING LIGHTS*
 *
 * THIS FILE IS AUTOMATICALLY GENERATED
 * DO NOT EDIT IT, YOUR CHANGES WILL BE OVER-WRITTEN ON BUILD.
 *
 * This data is generated based on your controllers & methods.
 */
export type RouteMethod = "DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "OPTIONS";

export interface ApplicationRouteInformation {
    name: string;
    path: string;
    controllerAction: string;
    controllerParams: string[];
    method: RouteMethod[];
    parameters: {
        [key: string]: string;
    };
}

export type RouteNames = "TestingAuthController.redirect" | "TestingAuthController.callback" | "TestingController.testRouteModelBinding" | "TestingController.testUserDecorator" | "TestingController.redirect" | "TestingController.redirectToRoute" | "TestingController.testQueryParamDecorator" | "TestingController.testCookieIsSet" | "TestingController.testCookieEncryption" | "TestingController.testSessionValue" | "TestingController.testSettingSessionValue" | "TestingController.testGet" | "TestingController.testMethods" | "TestingController.testMethodsTwo" | "TestingController.testRouteModelBindingObj" | "TestingController.testRouteModelBindingObjValues" | "TestingController.testRouteModelBindingValues" | "TestingController.something" | "TestingController.testBody" | "TestingController.testRegularSlash" | "TestingController.testFailingDto" | "TestingController.testUploadFile" | "TestingController.getToken" | "TestingController.sendSocketEventToAuthedUser" | "TestingController.testPagination" | "TestingController.testPaginationFiltered" | "TestingController.testQueryBuilderMethod" | "TestingController.testFailingUserPolicy" | "TestingController.testSuccessfulUserPolicy" | "TestingController.testFailingUserPolicyOnController" | "TestingController.testSuccessfulUserPolicyOnController" | "TestingController.testFailingUserPolicyOnUser" | "TestingController.testSuccessfulUserPolicyOnUser" | "TestingController.testDispatchingEvent" | "TestingController.testRenderingView" | "TestingController.testRenderingViewWithFlash" | "TestingController.testRenderingViewPost" | "TestingController.testNegotiatedResponse" | "TestingController.test404Response" | "TestingController.test500Response" | "TestingController.testingRouteParams" | "UserController.list" | "UserController.get" | "UserController.store" | "UserController.update" | "UserController.delete";

export type RoutePaths = "/auth/redirect" | "/auth/callback" | "/testing/rmb/userobject/:user" | "/testing/auth/userdecorator" | "/testing/redirect" | "/testing/redirect/route" | "/testing/decorator/param" | "/testing/cookie/is-set" | "/testing/cookie/test-encrypted" | "/testing/session/get" | "/testing/session/set" | "/testing/get" | "/testing/testget" | "/testing/testget" | "/testing/rmb/userobject/obj/:user" | "/testing/rmb/uservalsobj/:user" | "/testing/rmb/uservals/:user" | "/testing/something" | "/testing/body" | "/testing/" | "/testing/failed/dto" | "/testing/file/upload" | "/testing/auth/token" | "/testing/auth/event" | "/testing/model/pagination" | "/testing/model/pagination/filtered" | "/testing/" | "/testing/user/policy" | "/testing/user/policy/successful" | "/testing/user/policy/controller" | "/testing/user/policy/controller/successful" | "/testing/user/policy/controller/user" | "/testing/user/policy/controller/user/successful" | "/testing/events/dispatching" | "/testing/view" | "/testing/view/flash" | "/testing/view/post" | "/testing/view/negotiated" | "/testing/view/404" | "/testing/view/500" | "/testing/testing/:item/:itemtwo/three/:four" | "/user/" | "/user/:user" | "/user/" | "/user/:user" | "/user/:user";

export type ApplicationRouteList = {
    [p in RouteNames]: ApplicationRouteInformation;
};

export type ApplicationRouteAttributeObject = {
    "TestingAuthController.redirect": Partial<{}>;
    "TestingAuthController.callback": Partial<{}>;
    "TestingController.testRouteModelBinding": Partial<{
        user: any;
    }>;
    "TestingController.testUserDecorator": Partial<{
        user: any;
        dt: any;
    }>;
    "TestingController.redirect": Partial<{
        message: any;
    }>;
    "TestingController.redirectToRoute": Partial<{
        message: any;
    }>;
    "TestingController.testQueryParamDecorator": Partial<{
        message: any;
    }>;
    "TestingController.testCookieIsSet": Partial<{}>;
    "TestingController.testCookieEncryption": Partial<{}>;
    "TestingController.testSessionValue": Partial<{}>;
    "TestingController.testSettingSessionValue": Partial<{}>;
    "TestingController.testGet": Partial<{
        dt: any;
    }>;
    "TestingController.testMethods": Partial<{
        dt: any;
    }>;
    "TestingController.testMethodsTwo": Partial<{
        dt: any;
    }>;
    "TestingController.testRouteModelBindingObj": Partial<{
        user: any;
    }>;
    "TestingController.testRouteModelBindingObjValues": Partial<{
        user: any;
    }>;
    "TestingController.testRouteModelBindingValues": Partial<{
        user: any;
    }>;
    "TestingController.something": Partial<{}>;
    "TestingController.testBody": Partial<{
        body: any;
    }>;
    "TestingController.testRegularSlash": Partial<{}>;
    "TestingController.testFailingDto": Partial<{
        dto: any;
    }>;
    "TestingController.testUploadFile": Partial<{}>;
    "TestingController.getToken": Partial<{}>;
    "TestingController.sendSocketEventToAuthedUser": Partial<{}>;
    "TestingController.testPagination": Partial<{}>;
    "TestingController.testPaginationFiltered": Partial<{}>;
    "TestingController.testQueryBuilderMethod": Partial<{}>;
    "TestingController.testFailingUserPolicy": Partial<{
        user: any;
    }>;
    "TestingController.testSuccessfulUserPolicy": Partial<{
        user: any;
    }>;
    "TestingController.testFailingUserPolicyOnController": Partial<{
        user: any;
    }>;
    "TestingController.testSuccessfulUserPolicyOnController": Partial<{
        user: any;
    }>;
    "TestingController.testFailingUserPolicyOnUser": Partial<{
        user: any;
    }>;
    "TestingController.testSuccessfulUserPolicyOnUser": Partial<{
        user: any;
    }>;
    "TestingController.testDispatchingEvent": Partial<{}>;
    "TestingController.testRenderingView": Partial<{}>;
    "TestingController.testRenderingViewWithFlash": Partial<{}>;
    "TestingController.testRenderingViewPost": Partial<{}>;
    "TestingController.testNegotiatedResponse": Partial<{}>;
    "TestingController.test404Response": Partial<{}>;
    "TestingController.test500Response": Partial<{}>;
    "TestingController.testingRouteParams": Partial<{}>;
    "UserController.list": Partial<{}>;
    "UserController.get": Partial<{
        user: any;
    }>;
    "UserController.store": Partial<{
        body: any;
    }>;
    "UserController.update": Partial<{
        user: any;
        body: any;
    }>;
    "UserController.delete": Partial<{
        user: any;
    }>;
};

export const applicationRoutePaths: Array<RouteNames[keyof RouteNames]> = ["/auth/redirect", "/auth/callback", "/testing/rmb/userobject/:user", "/testing/auth/userdecorator", "/testing/redirect", "/testing/redirect/route", "/testing/decorator/param", "/testing/cookie/is-set", "/testing/cookie/test-encrypted", "/testing/session/get", "/testing/session/set", "/testing/get", "/testing/testget", "/testing/testget", "/testing/rmb/userobject/obj/:user", "/testing/rmb/uservalsobj/:user", "/testing/rmb/uservals/:user", "/testing/something", "/testing/body", "/testing/", "/testing/failed/dto", "/testing/file/upload", "/testing/auth/token", "/testing/auth/event", "/testing/model/pagination", "/testing/model/pagination/filtered", "/testing/", "/testing/user/policy", "/testing/user/policy/successful", "/testing/user/policy/controller", "/testing/user/policy/controller/successful", "/testing/user/policy/controller/user", "/testing/user/policy/controller/user/successful", "/testing/events/dispatching", "/testing/view", "/testing/view/flash", "/testing/view/post", "/testing/view/negotiated", "/testing/view/404", "/testing/view/500", "/testing/testing/:item/:itemtwo/three/:four", "/user/", "/user/:user", "/user/", "/user/:user", "/user/:user"];

export const applicationRoutesMap: ApplicationRouteList = {
    "TestingAuthController.redirect": {
        name: "TestingAuthController.redirect",
        path: "/auth/redirect",
        controllerAction: "redirect",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingAuthController.callback": {
        name: "TestingAuthController.callback",
        path: "/auth/callback",
        controllerAction: "callback",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testRouteModelBinding": {
        name: "TestingController.testRouteModelBinding",
        path: "/testing/rmb/userobject/:user",
        controllerAction: "testRouteModelBinding",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: { "user": ":user" }
    },
    "TestingController.testUserDecorator": {
        name: "TestingController.testUserDecorator",
        path: "/testing/auth/userdecorator",
        controllerAction: "testUserDecorator",
        controllerParams: ["user", "dt"],
        method: ["POST"],
        parameters: {}
    },
    "TestingController.redirect": {
        name: "TestingController.redirect",
        path: "/testing/redirect",
        controllerAction: "redirect",
        controllerParams: ["message"],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.redirectToRoute": {
        name: "TestingController.redirectToRoute",
        path: "/testing/redirect/route",
        controllerAction: "redirectToRoute",
        controllerParams: ["message"],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testQueryParamDecorator": {
        name: "TestingController.testQueryParamDecorator",
        path: "/testing/decorator/param",
        controllerAction: "testQueryParamDecorator",
        controllerParams: ["message"],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testCookieIsSet": {
        name: "TestingController.testCookieIsSet",
        path: "/testing/cookie/is-set",
        controllerAction: "testCookieIsSet",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testCookieEncryption": {
        name: "TestingController.testCookieEncryption",
        path: "/testing/cookie/test-encrypted",
        controllerAction: "testCookieEncryption",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testSessionValue": {
        name: "TestingController.testSessionValue",
        path: "/testing/session/get",
        controllerAction: "testSessionValue",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testSettingSessionValue": {
        name: "TestingController.testSettingSessionValue",
        path: "/testing/session/set",
        controllerAction: "testSettingSessionValue",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testGet": {
        name: "TestingController.testGet",
        path: "/testing/get",
        controllerAction: "testGet",
        controllerParams: ["dt"],
        method: ["POST", "GET"],
        parameters: {}
    },
    "TestingController.testMethods": {
        name: "TestingController.testMethods",
        path: "/testing/testget",
        controllerAction: "testMethods",
        controllerParams: ["dt"],
        method: ["GET", "PUT"],
        parameters: {}
    },
    "TestingController.testMethodsTwo": {
        name: "TestingController.testMethodsTwo",
        path: "/testing/testget",
        controllerAction: "testMethodsTwo",
        controllerParams: ["dt"],
        method: ["DELETE", "POST"],
        parameters: {}
    },
    "TestingController.testRouteModelBindingObj": {
        name: "TestingController.testRouteModelBindingObj",
        path: "/testing/rmb/userobject/obj/:user",
        controllerAction: "testRouteModelBindingObj",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: { "user": ":user" }
    },
    "TestingController.testRouteModelBindingObjValues": {
        name: "TestingController.testRouteModelBindingObjValues",
        path: "/testing/rmb/uservalsobj/:user",
        controllerAction: "testRouteModelBindingObjValues",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: { "user": ":user" }
    },
    "TestingController.testRouteModelBindingValues": {
        name: "TestingController.testRouteModelBindingValues",
        path: "/testing/rmb/uservals/:user",
        controllerAction: "testRouteModelBindingValues",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: { "user": ":user" }
    },
    "TestingController.something": {
        name: "TestingController.something",
        path: "/testing/something",
        controllerAction: "something",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testBody": {
        name: "TestingController.testBody",
        path: "/testing/body",
        controllerAction: "testBody",
        controllerParams: ["body"],
        method: ["POST"],
        parameters: {}
    },
    "TestingController.testRegularSlash": {
        name: "TestingController.testRegularSlash",
        path: "/testing/",
        controllerAction: "testRegularSlash",
        controllerParams: [],
        method: ["POST"],
        parameters: {}
    },
    "TestingController.testFailingDto": {
        name: "TestingController.testFailingDto",
        path: "/testing/failed/dto",
        controllerAction: "testFailingDto",
        controllerParams: ["dto"],
        method: ["POST"],
        parameters: {}
    },
    "TestingController.testUploadFile": {
        name: "TestingController.testUploadFile",
        path: "/testing/file/upload",
        controllerAction: "testUploadFile",
        controllerParams: [],
        method: ["POST"],
        parameters: {}
    },
    "TestingController.getToken": {
        name: "TestingController.getToken",
        path: "/testing/auth/token",
        controllerAction: "getToken",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.sendSocketEventToAuthedUser": {
        name: "TestingController.sendSocketEventToAuthedUser",
        path: "/testing/auth/event",
        controllerAction: "sendSocketEventToAuthedUser",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testPagination": {
        name: "TestingController.testPagination",
        path: "/testing/model/pagination",
        controllerAction: "testPagination",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testPaginationFiltered": {
        name: "TestingController.testPaginationFiltered",
        path: "/testing/model/pagination/filtered",
        controllerAction: "testPaginationFiltered",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testQueryBuilderMethod": {
        name: "TestingController.testQueryBuilderMethod",
        path: "/testing/",
        controllerAction: "testQueryBuilderMethod",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testFailingUserPolicy": {
        name: "TestingController.testFailingUserPolicy",
        path: "/testing/user/policy",
        controllerAction: "testFailingUserPolicy",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testSuccessfulUserPolicy": {
        name: "TestingController.testSuccessfulUserPolicy",
        path: "/testing/user/policy/successful",
        controllerAction: "testSuccessfulUserPolicy",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testFailingUserPolicyOnController": {
        name: "TestingController.testFailingUserPolicyOnController",
        path: "/testing/user/policy/controller",
        controllerAction: "testFailingUserPolicyOnController",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testSuccessfulUserPolicyOnController": {
        name: "TestingController.testSuccessfulUserPolicyOnController",
        path: "/testing/user/policy/controller/successful",
        controllerAction: "testSuccessfulUserPolicyOnController",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testFailingUserPolicyOnUser": {
        name: "TestingController.testFailingUserPolicyOnUser",
        path: "/testing/user/policy/controller/user",
        controllerAction: "testFailingUserPolicyOnUser",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testSuccessfulUserPolicyOnUser": {
        name: "TestingController.testSuccessfulUserPolicyOnUser",
        path: "/testing/user/policy/controller/user/successful",
        controllerAction: "testSuccessfulUserPolicyOnUser",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testDispatchingEvent": {
        name: "TestingController.testDispatchingEvent",
        path: "/testing/events/dispatching",
        controllerAction: "testDispatchingEvent",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testRenderingView": {
        name: "TestingController.testRenderingView",
        path: "/testing/view",
        controllerAction: "testRenderingView",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testRenderingViewWithFlash": {
        name: "TestingController.testRenderingViewWithFlash",
        path: "/testing/view/flash",
        controllerAction: "testRenderingViewWithFlash",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testRenderingViewPost": {
        name: "TestingController.testRenderingViewPost",
        path: "/testing/view/post",
        controllerAction: "testRenderingViewPost",
        controllerParams: [],
        method: ["POST"],
        parameters: {}
    },
    "TestingController.testNegotiatedResponse": {
        name: "TestingController.testNegotiatedResponse",
        path: "/testing/view/negotiated",
        controllerAction: "testNegotiatedResponse",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.test404Response": {
        name: "TestingController.test404Response",
        path: "/testing/view/404",
        controllerAction: "test404Response",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.test500Response": {
        name: "TestingController.test500Response",
        path: "/testing/view/500",
        controllerAction: "test500Response",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "TestingController.testingRouteParams": {
        name: "TestingController.testingRouteParams",
        path: "/testing/testing/:item/:itemtwo/three/:four",
        controllerAction: "testingRouteParams",
        controllerParams: [],
        method: ["GET"],
        parameters: { "item": ":item", "itemtwo": ":itemtwo", "four": ":four" }
    },
    "UserController.list": {
        name: "UserController.list",
        path: "/user/",
        controllerAction: "list",
        controllerParams: [],
        method: ["GET"],
        parameters: {}
    },
    "UserController.get": {
        name: "UserController.get",
        path: "/user/:user",
        controllerAction: "get",
        controllerParams: ["user"],
        method: ["GET"],
        parameters: { "user": ":user" }
    },
    "UserController.store": {
        name: "UserController.store",
        path: "/user/",
        controllerAction: "store",
        controllerParams: ["body"],
        method: ["PUT"],
        parameters: {}
    },
    "UserController.update": {
        name: "UserController.update",
        path: "/user/:user",
        controllerAction: "update",
        controllerParams: ["user", "body"],
        method: ["PATCH"],
        parameters: { "user": ":user" }
    },
    "UserController.delete": {
        name: "UserController.delete",
        path: "/user/:user",
        controllerAction: "delete",
        controllerParams: ["user"],
        method: ["DELETE"],
        parameters: { "user": ":user" }
    }
};
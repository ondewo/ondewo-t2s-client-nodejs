// package: ondewo.t2s
// file: ondewo/t2s/custom_phonemizer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_t2s_custom_phonemizer_pb from "../../ondewo/t2s/custom_phonemizer_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ICustomPhonemizersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCustomPhonemizer: ICustomPhonemizersService_IGetCustomPhonemizer;
    createCustomPhonemizer: ICustomPhonemizersService_ICreateCustomPhonemizer;
    deleteCustomPhonemizer: ICustomPhonemizersService_IDeleteCustomPhonemizer;
    updateCustomPhonemizer: ICustomPhonemizersService_IUpdateCustomPhonemizer;
    listCustomPhonemizer: ICustomPhonemizersService_IListCustomPhonemizer;
}

interface ICustomPhonemizersService_IGetCustomPhonemizer extends grpc.MethodDefinition<ondewo_t2s_custom_phonemizer_pb.PhonemizerId, ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto> {
    path: "/ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_custom_phonemizer_pb.PhonemizerId>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_custom_phonemizer_pb.PhonemizerId>;
    responseSerialize: grpc.serialize<ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto>;
    responseDeserialize: grpc.deserialize<ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto>;
}
interface ICustomPhonemizersService_ICreateCustomPhonemizer extends grpc.MethodDefinition<ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest, ondewo_t2s_custom_phonemizer_pb.PhonemizerId> {
    path: "/ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest>;
    responseSerialize: grpc.serialize<ondewo_t2s_custom_phonemizer_pb.PhonemizerId>;
    responseDeserialize: grpc.deserialize<ondewo_t2s_custom_phonemizer_pb.PhonemizerId>;
}
interface ICustomPhonemizersService_IDeleteCustomPhonemizer extends grpc.MethodDefinition<ondewo_t2s_custom_phonemizer_pb.PhonemizerId, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_custom_phonemizer_pb.PhonemizerId>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_custom_phonemizer_pb.PhonemizerId>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ICustomPhonemizersService_IUpdateCustomPhonemizer extends grpc.MethodDefinition<ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest, ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto> {
    path: "/ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest>;
    responseSerialize: grpc.serialize<ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto>;
    responseDeserialize: grpc.deserialize<ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto>;
}
interface ICustomPhonemizersService_IListCustomPhonemizer extends grpc.MethodDefinition<ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest, ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse> {
    path: "/ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest>;
    responseSerialize: grpc.serialize<ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse>;
}

export const CustomPhonemizersService: ICustomPhonemizersService;

export interface ICustomPhonemizersServer {
    getCustomPhonemizer: grpc.handleUnaryCall<ondewo_t2s_custom_phonemizer_pb.PhonemizerId, ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto>;
    createCustomPhonemizer: grpc.handleUnaryCall<ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest, ondewo_t2s_custom_phonemizer_pb.PhonemizerId>;
    deleteCustomPhonemizer: grpc.handleUnaryCall<ondewo_t2s_custom_phonemizer_pb.PhonemizerId, google_protobuf_empty_pb.Empty>;
    updateCustomPhonemizer: grpc.handleUnaryCall<ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest, ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto>;
    listCustomPhonemizer: grpc.handleUnaryCall<ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest, ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse>;
}

export interface ICustomPhonemizersClient {
    getCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    getCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    getCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    createCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.PhonemizerId) => void): grpc.ClientUnaryCall;
    createCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.PhonemizerId) => void): grpc.ClientUnaryCall;
    createCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.PhonemizerId) => void): grpc.ClientUnaryCall;
    deleteCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    updateCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    updateCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    listCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse) => void): grpc.ClientUnaryCall;
    listCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse) => void): grpc.ClientUnaryCall;
    listCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse) => void): grpc.ClientUnaryCall;
}

export class CustomPhonemizersClient extends grpc.Client implements ICustomPhonemizersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    public getCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    public getCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    public createCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.PhonemizerId) => void): grpc.ClientUnaryCall;
    public createCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.PhonemizerId) => void): grpc.ClientUnaryCall;
    public createCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.PhonemizerId) => void): grpc.ClientUnaryCall;
    public deleteCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.PhonemizerId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    public updateCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    public updateCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto) => void): grpc.ClientUnaryCall;
    public listCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse) => void): grpc.ClientUnaryCall;
    public listCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse) => void): grpc.ClientUnaryCall;
    public listCustomPhonemizer(request: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse) => void): grpc.ClientUnaryCall;
}

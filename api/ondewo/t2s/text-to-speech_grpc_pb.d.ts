// package: ondewo.t2s
// file: ondewo/t2s/text-to-speech.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_t2s_text_to_speech_pb from "../../ondewo/t2s/text-to-speech_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IText2SpeechService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    synthesize: IText2SpeechService_ISynthesize;
    getT2sPipeline: IText2SpeechService_IGetT2sPipeline;
    createT2sPipeline: IText2SpeechService_ICreateT2sPipeline;
    deleteT2sPipeline: IText2SpeechService_IDeleteT2sPipeline;
    updateT2sPipeline: IText2SpeechService_IUpdateT2sPipeline;
    listT2sPipelines: IText2SpeechService_IListT2sPipelines;
    listT2sLanguages: IText2SpeechService_IListT2sLanguages;
    listT2sDomains: IText2SpeechService_IListT2sDomains;
}

interface IText2SpeechService_ISynthesize extends grpc.MethodDefinition<ondewo_t2s_text_to_speech_pb.SynthesizeRequest, ondewo_t2s_text_to_speech_pb.SynthesizeResponse> {
    path: "/ondewo.t2s.Text2Speech/Synthesize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.SynthesizeRequest>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.SynthesizeRequest>;
    responseSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.SynthesizeResponse>;
    responseDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.SynthesizeResponse>;
}
interface IText2SpeechService_IGetT2sPipeline extends grpc.MethodDefinition<ondewo_t2s_text_to_speech_pb.T2sPipelineId, ondewo_t2s_text_to_speech_pb.Text2SpeechConfig> {
    path: "/ondewo.t2s.Text2Speech/GetT2sPipeline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.T2sPipelineId>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.T2sPipelineId>;
    responseSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.Text2SpeechConfig>;
    responseDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.Text2SpeechConfig>;
}
interface IText2SpeechService_ICreateT2sPipeline extends grpc.MethodDefinition<ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, ondewo_t2s_text_to_speech_pb.T2sPipelineId> {
    path: "/ondewo.t2s.Text2Speech/CreateT2sPipeline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.Text2SpeechConfig>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.Text2SpeechConfig>;
    responseSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.T2sPipelineId>;
    responseDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.T2sPipelineId>;
}
interface IText2SpeechService_IDeleteT2sPipeline extends grpc.MethodDefinition<ondewo_t2s_text_to_speech_pb.T2sPipelineId, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.t2s.Text2Speech/DeleteT2sPipeline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.T2sPipelineId>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.T2sPipelineId>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IText2SpeechService_IUpdateT2sPipeline extends grpc.MethodDefinition<ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.t2s.Text2Speech/UpdateT2sPipeline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.Text2SpeechConfig>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.Text2SpeechConfig>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IText2SpeechService_IListT2sPipelines extends grpc.MethodDefinition<ondewo_t2s_text_to_speech_pb.ListT2sPipelinesRequest, ondewo_t2s_text_to_speech_pb.ListT2sPipelinesResponse> {
    path: "/ondewo.t2s.Text2Speech/ListT2sPipelines";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.ListT2sPipelinesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.ListT2sPipelinesRequest>;
    responseSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.ListT2sPipelinesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.ListT2sPipelinesResponse>;
}
interface IText2SpeechService_IListT2sLanguages extends grpc.MethodDefinition<ondewo_t2s_text_to_speech_pb.ListT2sLanguagesRequest, ondewo_t2s_text_to_speech_pb.ListT2sLanguagesResponse> {
    path: "/ondewo.t2s.Text2Speech/ListT2sLanguages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.ListT2sLanguagesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.ListT2sLanguagesRequest>;
    responseSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.ListT2sLanguagesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.ListT2sLanguagesResponse>;
}
interface IText2SpeechService_IListT2sDomains extends grpc.MethodDefinition<ondewo_t2s_text_to_speech_pb.ListT2sDomainsRequest, ondewo_t2s_text_to_speech_pb.ListT2sDomainsResponse> {
    path: "/ondewo.t2s.Text2Speech/ListT2sDomains";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.ListT2sDomainsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.ListT2sDomainsRequest>;
    responseSerialize: grpc.serialize<ondewo_t2s_text_to_speech_pb.ListT2sDomainsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_t2s_text_to_speech_pb.ListT2sDomainsResponse>;
}

export const Text2SpeechService: IText2SpeechService;

export interface IText2SpeechServer {
    synthesize: grpc.handleUnaryCall<ondewo_t2s_text_to_speech_pb.SynthesizeRequest, ondewo_t2s_text_to_speech_pb.SynthesizeResponse>;
    getT2sPipeline: grpc.handleUnaryCall<ondewo_t2s_text_to_speech_pb.T2sPipelineId, ondewo_t2s_text_to_speech_pb.Text2SpeechConfig>;
    createT2sPipeline: grpc.handleUnaryCall<ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, ondewo_t2s_text_to_speech_pb.T2sPipelineId>;
    deleteT2sPipeline: grpc.handleUnaryCall<ondewo_t2s_text_to_speech_pb.T2sPipelineId, google_protobuf_empty_pb.Empty>;
    updateT2sPipeline: grpc.handleUnaryCall<ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, google_protobuf_empty_pb.Empty>;
    listT2sPipelines: grpc.handleUnaryCall<ondewo_t2s_text_to_speech_pb.ListT2sPipelinesRequest, ondewo_t2s_text_to_speech_pb.ListT2sPipelinesResponse>;
    listT2sLanguages: grpc.handleUnaryCall<ondewo_t2s_text_to_speech_pb.ListT2sLanguagesRequest, ondewo_t2s_text_to_speech_pb.ListT2sLanguagesResponse>;
    listT2sDomains: grpc.handleUnaryCall<ondewo_t2s_text_to_speech_pb.ListT2sDomainsRequest, ondewo_t2s_text_to_speech_pb.ListT2sDomainsResponse>;
}

export interface IText2SpeechClient {
    synthesize(request: ondewo_t2s_text_to_speech_pb.SynthesizeRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.SynthesizeResponse) => void): grpc.ClientUnaryCall;
    synthesize(request: ondewo_t2s_text_to_speech_pb.SynthesizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.SynthesizeResponse) => void): grpc.ClientUnaryCall;
    synthesize(request: ondewo_t2s_text_to_speech_pb.SynthesizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.SynthesizeResponse) => void): grpc.ClientUnaryCall;
    getT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig) => void): grpc.ClientUnaryCall;
    getT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig) => void): grpc.ClientUnaryCall;
    getT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig) => void): grpc.ClientUnaryCall;
    createT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.T2sPipelineId) => void): grpc.ClientUnaryCall;
    createT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.T2sPipelineId) => void): grpc.ClientUnaryCall;
    createT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.T2sPipelineId) => void): grpc.ClientUnaryCall;
    deleteT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listT2sPipelines(request: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    listT2sPipelines(request: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    listT2sPipelines(request: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    listT2sLanguages(request: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesResponse) => void): grpc.ClientUnaryCall;
    listT2sLanguages(request: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesResponse) => void): grpc.ClientUnaryCall;
    listT2sLanguages(request: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesResponse) => void): grpc.ClientUnaryCall;
    listT2sDomains(request: ondewo_t2s_text_to_speech_pb.ListT2sDomainsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sDomainsResponse) => void): grpc.ClientUnaryCall;
    listT2sDomains(request: ondewo_t2s_text_to_speech_pb.ListT2sDomainsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sDomainsResponse) => void): grpc.ClientUnaryCall;
    listT2sDomains(request: ondewo_t2s_text_to_speech_pb.ListT2sDomainsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sDomainsResponse) => void): grpc.ClientUnaryCall;
}

export class Text2SpeechClient extends grpc.Client implements IText2SpeechClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public synthesize(request: ondewo_t2s_text_to_speech_pb.SynthesizeRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.SynthesizeResponse) => void): grpc.ClientUnaryCall;
    public synthesize(request: ondewo_t2s_text_to_speech_pb.SynthesizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.SynthesizeResponse) => void): grpc.ClientUnaryCall;
    public synthesize(request: ondewo_t2s_text_to_speech_pb.SynthesizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.SynthesizeResponse) => void): grpc.ClientUnaryCall;
    public getT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig) => void): grpc.ClientUnaryCall;
    public getT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig) => void): grpc.ClientUnaryCall;
    public getT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig) => void): grpc.ClientUnaryCall;
    public createT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.T2sPipelineId) => void): grpc.ClientUnaryCall;
    public createT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.T2sPipelineId) => void): grpc.ClientUnaryCall;
    public createT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.T2sPipelineId) => void): grpc.ClientUnaryCall;
    public deleteT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteT2sPipeline(request: ondewo_t2s_text_to_speech_pb.T2sPipelineId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateT2sPipeline(request: ondewo_t2s_text_to_speech_pb.Text2SpeechConfig, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listT2sPipelines(request: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    public listT2sPipelines(request: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    public listT2sPipelines(request: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    public listT2sLanguages(request: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesResponse) => void): grpc.ClientUnaryCall;
    public listT2sLanguages(request: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesResponse) => void): grpc.ClientUnaryCall;
    public listT2sLanguages(request: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sLanguagesResponse) => void): grpc.ClientUnaryCall;
    public listT2sDomains(request: ondewo_t2s_text_to_speech_pb.ListT2sDomainsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sDomainsResponse) => void): grpc.ClientUnaryCall;
    public listT2sDomains(request: ondewo_t2s_text_to_speech_pb.ListT2sDomainsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sDomainsResponse) => void): grpc.ClientUnaryCall;
    public listT2sDomains(request: ondewo_t2s_text_to_speech_pb.ListT2sDomainsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_t2s_text_to_speech_pb.ListT2sDomainsResponse) => void): grpc.ClientUnaryCall;
}

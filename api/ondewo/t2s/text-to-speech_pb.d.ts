// package: ondewo.t2s
// file: ondewo/t2s/text-to-speech.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class SynthesizeRequest extends jspb.Message { 
    getText(): string;
    setText(value: string): SynthesizeRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): RequestConfig | undefined;
    setConfig(value?: RequestConfig): SynthesizeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SynthesizeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SynthesizeRequest): SynthesizeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SynthesizeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SynthesizeRequest;
    static deserializeBinaryFromReader(message: SynthesizeRequest, reader: jspb.BinaryReader): SynthesizeRequest;
}

export namespace SynthesizeRequest {
    export type AsObject = {
        text: string,
        config?: RequestConfig.AsObject,
    }
}

export class BatchSynthesizeRequest extends jspb.Message { 
    clearBatchRequestList(): void;
    getBatchRequestList(): Array<SynthesizeRequest>;
    setBatchRequestList(value: Array<SynthesizeRequest>): BatchSynthesizeRequest;
    addBatchRequest(value?: SynthesizeRequest, index?: number): SynthesizeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchSynthesizeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchSynthesizeRequest): BatchSynthesizeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchSynthesizeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchSynthesizeRequest;
    static deserializeBinaryFromReader(message: BatchSynthesizeRequest, reader: jspb.BinaryReader): BatchSynthesizeRequest;
}

export namespace BatchSynthesizeRequest {
    export type AsObject = {
        batchRequestList: Array<SynthesizeRequest.AsObject>,
    }
}

export class BatchSynthesizeResponse extends jspb.Message { 
    clearBatchResponseList(): void;
    getBatchResponseList(): Array<SynthesizeResponse>;
    setBatchResponseList(value: Array<SynthesizeResponse>): BatchSynthesizeResponse;
    addBatchResponse(value?: SynthesizeResponse, index?: number): SynthesizeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchSynthesizeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchSynthesizeResponse): BatchSynthesizeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchSynthesizeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchSynthesizeResponse;
    static deserializeBinaryFromReader(message: BatchSynthesizeResponse, reader: jspb.BinaryReader): BatchSynthesizeResponse;
}

export namespace BatchSynthesizeResponse {
    export type AsObject = {
        batchResponseList: Array<SynthesizeResponse.AsObject>,
    }
}

export class RequestConfig extends jspb.Message { 
    getT2sPipelineId(): string;
    setT2sPipelineId(value: string): RequestConfig;

    hasLengthScale(): boolean;
    clearLengthScale(): void;
    getLengthScale(): number;
    setLengthScale(value: number): RequestConfig;

    hasNoiseScale(): boolean;
    clearNoiseScale(): void;
    getNoiseScale(): number;
    setNoiseScale(value: number): RequestConfig;

    hasSampleRate(): boolean;
    clearSampleRate(): void;
    getSampleRate(): number;
    setSampleRate(value: number): RequestConfig;

    hasPcm(): boolean;
    clearPcm(): void;
    getPcm(): Pcm;
    setPcm(value: Pcm): RequestConfig;

    hasAudioFormat(): boolean;
    clearAudioFormat(): void;
    getAudioFormat(): AudioFormat;
    setAudioFormat(value: AudioFormat): RequestConfig;

    hasUseCache(): boolean;
    clearUseCache(): void;
    getUseCache(): boolean;
    setUseCache(value: boolean): RequestConfig;

    hasNormalizer(): boolean;
    clearNormalizer(): void;
    getNormalizer(): string;
    setNormalizer(value: string): RequestConfig;

    getOneofLengthScaleCase(): RequestConfig.OneofLengthScaleCase;
    getOneofNoiseScaleCase(): RequestConfig.OneofNoiseScaleCase;
    getOneofSampleRateCase(): RequestConfig.OneofSampleRateCase;
    getOneofPcmCase(): RequestConfig.OneofPcmCase;
    getOneofAudioformatCase(): RequestConfig.OneofAudioformatCase;
    getOneofUseCacheCase(): RequestConfig.OneofUseCacheCase;
    getOneofNormalizerCase(): RequestConfig.OneofNormalizerCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RequestConfig): RequestConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestConfig;
    static deserializeBinaryFromReader(message: RequestConfig, reader: jspb.BinaryReader): RequestConfig;
}

export namespace RequestConfig {
    export type AsObject = {
        t2sPipelineId: string,
        lengthScale: number,
        noiseScale: number,
        sampleRate: number,
        pcm: Pcm,
        audioFormat: AudioFormat,
        useCache: boolean,
        normalizer: string,
    }

    export enum OneofLengthScaleCase {
        ONEOF_LENGTH_SCALE_NOT_SET = 0,
        LENGTH_SCALE = 2,
    }

    export enum OneofNoiseScaleCase {
        ONEOF_NOISE_SCALE_NOT_SET = 0,
        NOISE_SCALE = 3,
    }

    export enum OneofSampleRateCase {
        ONEOF_SAMPLE_RATE_NOT_SET = 0,
        SAMPLE_RATE = 4,
    }

    export enum OneofPcmCase {
        ONEOF_PCM_NOT_SET = 0,
        PCM = 5,
    }

    export enum OneofAudioformatCase {
        ONEOF_AUDIOFORMAT_NOT_SET = 0,
        AUDIO_FORMAT = 6,
    }

    export enum OneofUseCacheCase {
        ONEOF_USE_CACHE_NOT_SET = 0,
        USE_CACHE = 7,
    }

    export enum OneofNormalizerCase {
        ONEOF_NORMALIZER_NOT_SET = 0,
        NORMALIZER = 8,
    }

}

export class SynthesizeResponse extends jspb.Message { 
    getAudioUuid(): string;
    setAudioUuid(value: string): SynthesizeResponse;
    getAudio(): Uint8Array | string;
    getAudio_asU8(): Uint8Array;
    getAudio_asB64(): string;
    setAudio(value: Uint8Array | string): SynthesizeResponse;
    getGenerationTime(): number;
    setGenerationTime(value: number): SynthesizeResponse;
    getAudioLength(): number;
    setAudioLength(value: number): SynthesizeResponse;
    getText(): string;
    setText(value: string): SynthesizeResponse;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): RequestConfig | undefined;
    setConfig(value?: RequestConfig): SynthesizeResponse;
    getNormalizedText(): string;
    setNormalizedText(value: string): SynthesizeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SynthesizeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SynthesizeResponse): SynthesizeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SynthesizeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SynthesizeResponse;
    static deserializeBinaryFromReader(message: SynthesizeResponse, reader: jspb.BinaryReader): SynthesizeResponse;
}

export namespace SynthesizeResponse {
    export type AsObject = {
        audioUuid: string,
        audio: Uint8Array | string,
        generationTime: number,
        audioLength: number,
        text: string,
        config?: RequestConfig.AsObject,
        normalizedText: string,
    }
}

export class NormalizeTextRequest extends jspb.Message { 
    getT2sPipelineId(): string;
    setT2sPipelineId(value: string): NormalizeTextRequest;
    getText(): string;
    setText(value: string): NormalizeTextRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NormalizeTextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NormalizeTextRequest): NormalizeTextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NormalizeTextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NormalizeTextRequest;
    static deserializeBinaryFromReader(message: NormalizeTextRequest, reader: jspb.BinaryReader): NormalizeTextRequest;
}

export namespace NormalizeTextRequest {
    export type AsObject = {
        t2sPipelineId: string,
        text: string,
    }
}

export class NormalizeTextResponse extends jspb.Message { 
    getNormalizedText(): string;
    setNormalizedText(value: string): NormalizeTextResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NormalizeTextResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NormalizeTextResponse): NormalizeTextResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NormalizeTextResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NormalizeTextResponse;
    static deserializeBinaryFromReader(message: NormalizeTextResponse, reader: jspb.BinaryReader): NormalizeTextResponse;
}

export namespace NormalizeTextResponse {
    export type AsObject = {
        normalizedText: string,
    }
}

export class T2SGetServiceInfoResponse extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): T2SGetServiceInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): T2SGetServiceInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: T2SGetServiceInfoResponse): T2SGetServiceInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: T2SGetServiceInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): T2SGetServiceInfoResponse;
    static deserializeBinaryFromReader(message: T2SGetServiceInfoResponse, reader: jspb.BinaryReader): T2SGetServiceInfoResponse;
}

export namespace T2SGetServiceInfoResponse {
    export type AsObject = {
        version: string,
    }
}

export class ListT2sPipelinesRequest extends jspb.Message { 
    clearLanguagesList(): void;
    getLanguagesList(): Array<string>;
    setLanguagesList(value: Array<string>): ListT2sPipelinesRequest;
    addLanguages(value: string, index?: number): string;
    clearSpeakerSexesList(): void;
    getSpeakerSexesList(): Array<string>;
    setSpeakerSexesList(value: Array<string>): ListT2sPipelinesRequest;
    addSpeakerSexes(value: string, index?: number): string;
    clearPipelineOwnersList(): void;
    getPipelineOwnersList(): Array<string>;
    setPipelineOwnersList(value: Array<string>): ListT2sPipelinesRequest;
    addPipelineOwners(value: string, index?: number): string;
    clearSpeakerNamesList(): void;
    getSpeakerNamesList(): Array<string>;
    setSpeakerNamesList(value: Array<string>): ListT2sPipelinesRequest;
    addSpeakerNames(value: string, index?: number): string;
    clearDomainsList(): void;
    getDomainsList(): Array<string>;
    setDomainsList(value: Array<string>): ListT2sPipelinesRequest;
    addDomains(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListT2sPipelinesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListT2sPipelinesRequest): ListT2sPipelinesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListT2sPipelinesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListT2sPipelinesRequest;
    static deserializeBinaryFromReader(message: ListT2sPipelinesRequest, reader: jspb.BinaryReader): ListT2sPipelinesRequest;
}

export namespace ListT2sPipelinesRequest {
    export type AsObject = {
        languagesList: Array<string>,
        speakerSexesList: Array<string>,
        pipelineOwnersList: Array<string>,
        speakerNamesList: Array<string>,
        domainsList: Array<string>,
    }
}

export class ListT2sPipelinesResponse extends jspb.Message { 
    clearPipelinesList(): void;
    getPipelinesList(): Array<Text2SpeechConfig>;
    setPipelinesList(value: Array<Text2SpeechConfig>): ListT2sPipelinesResponse;
    addPipelines(value?: Text2SpeechConfig, index?: number): Text2SpeechConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListT2sPipelinesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListT2sPipelinesResponse): ListT2sPipelinesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListT2sPipelinesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListT2sPipelinesResponse;
    static deserializeBinaryFromReader(message: ListT2sPipelinesResponse, reader: jspb.BinaryReader): ListT2sPipelinesResponse;
}

export namespace ListT2sPipelinesResponse {
    export type AsObject = {
        pipelinesList: Array<Text2SpeechConfig.AsObject>,
    }
}

export class ListT2sLanguagesRequest extends jspb.Message { 
    clearSpeakerSexesList(): void;
    getSpeakerSexesList(): Array<string>;
    setSpeakerSexesList(value: Array<string>): ListT2sLanguagesRequest;
    addSpeakerSexes(value: string, index?: number): string;
    clearPipelineOwnersList(): void;
    getPipelineOwnersList(): Array<string>;
    setPipelineOwnersList(value: Array<string>): ListT2sLanguagesRequest;
    addPipelineOwners(value: string, index?: number): string;
    clearSpeakerNamesList(): void;
    getSpeakerNamesList(): Array<string>;
    setSpeakerNamesList(value: Array<string>): ListT2sLanguagesRequest;
    addSpeakerNames(value: string, index?: number): string;
    clearDomainsList(): void;
    getDomainsList(): Array<string>;
    setDomainsList(value: Array<string>): ListT2sLanguagesRequest;
    addDomains(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListT2sLanguagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListT2sLanguagesRequest): ListT2sLanguagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListT2sLanguagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListT2sLanguagesRequest;
    static deserializeBinaryFromReader(message: ListT2sLanguagesRequest, reader: jspb.BinaryReader): ListT2sLanguagesRequest;
}

export namespace ListT2sLanguagesRequest {
    export type AsObject = {
        speakerSexesList: Array<string>,
        pipelineOwnersList: Array<string>,
        speakerNamesList: Array<string>,
        domainsList: Array<string>,
    }
}

export class ListT2sLanguagesResponse extends jspb.Message { 
    clearLanguagesList(): void;
    getLanguagesList(): Array<string>;
    setLanguagesList(value: Array<string>): ListT2sLanguagesResponse;
    addLanguages(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListT2sLanguagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListT2sLanguagesResponse): ListT2sLanguagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListT2sLanguagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListT2sLanguagesResponse;
    static deserializeBinaryFromReader(message: ListT2sLanguagesResponse, reader: jspb.BinaryReader): ListT2sLanguagesResponse;
}

export namespace ListT2sLanguagesResponse {
    export type AsObject = {
        languagesList: Array<string>,
    }
}

export class ListT2sDomainsRequest extends jspb.Message { 
    clearSpeakerSexesList(): void;
    getSpeakerSexesList(): Array<string>;
    setSpeakerSexesList(value: Array<string>): ListT2sDomainsRequest;
    addSpeakerSexes(value: string, index?: number): string;
    clearPipelineOwnersList(): void;
    getPipelineOwnersList(): Array<string>;
    setPipelineOwnersList(value: Array<string>): ListT2sDomainsRequest;
    addPipelineOwners(value: string, index?: number): string;
    clearSpeakerNamesList(): void;
    getSpeakerNamesList(): Array<string>;
    setSpeakerNamesList(value: Array<string>): ListT2sDomainsRequest;
    addSpeakerNames(value: string, index?: number): string;
    clearLanguagesList(): void;
    getLanguagesList(): Array<string>;
    setLanguagesList(value: Array<string>): ListT2sDomainsRequest;
    addLanguages(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListT2sDomainsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListT2sDomainsRequest): ListT2sDomainsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListT2sDomainsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListT2sDomainsRequest;
    static deserializeBinaryFromReader(message: ListT2sDomainsRequest, reader: jspb.BinaryReader): ListT2sDomainsRequest;
}

export namespace ListT2sDomainsRequest {
    export type AsObject = {
        speakerSexesList: Array<string>,
        pipelineOwnersList: Array<string>,
        speakerNamesList: Array<string>,
        languagesList: Array<string>,
    }
}

export class ListT2sDomainsResponse extends jspb.Message { 
    clearDomainsList(): void;
    getDomainsList(): Array<string>;
    setDomainsList(value: Array<string>): ListT2sDomainsResponse;
    addDomains(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListT2sDomainsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListT2sDomainsResponse): ListT2sDomainsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListT2sDomainsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListT2sDomainsResponse;
    static deserializeBinaryFromReader(message: ListT2sDomainsResponse, reader: jspb.BinaryReader): ListT2sDomainsResponse;
}

export namespace ListT2sDomainsResponse {
    export type AsObject = {
        domainsList: Array<string>,
    }
}

export class T2sPipelineId extends jspb.Message { 
    getId(): string;
    setId(value: string): T2sPipelineId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): T2sPipelineId.AsObject;
    static toObject(includeInstance: boolean, msg: T2sPipelineId): T2sPipelineId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: T2sPipelineId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): T2sPipelineId;
    static deserializeBinaryFromReader(message: T2sPipelineId, reader: jspb.BinaryReader): T2sPipelineId;
}

export namespace T2sPipelineId {
    export type AsObject = {
        id: string,
    }
}

export class Text2SpeechConfig extends jspb.Message { 
    getId(): string;
    setId(value: string): Text2SpeechConfig;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): T2SDescription | undefined;
    setDescription(value?: T2SDescription): Text2SpeechConfig;
    getActive(): boolean;
    setActive(value: boolean): Text2SpeechConfig;

    hasInference(): boolean;
    clearInference(): void;
    getInference(): T2SInference | undefined;
    setInference(value?: T2SInference): Text2SpeechConfig;

    hasNormalization(): boolean;
    clearNormalization(): void;
    getNormalization(): T2SNormalization | undefined;
    setNormalization(value?: T2SNormalization): Text2SpeechConfig;

    hasPostprocessing(): boolean;
    clearPostprocessing(): void;
    getPostprocessing(): Postprocessing | undefined;
    setPostprocessing(value?: Postprocessing): Text2SpeechConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Text2SpeechConfig.AsObject;
    static toObject(includeInstance: boolean, msg: Text2SpeechConfig): Text2SpeechConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Text2SpeechConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Text2SpeechConfig;
    static deserializeBinaryFromReader(message: Text2SpeechConfig, reader: jspb.BinaryReader): Text2SpeechConfig;
}

export namespace Text2SpeechConfig {
    export type AsObject = {
        id: string,
        description?: T2SDescription.AsObject,
        active: boolean,
        inference?: T2SInference.AsObject,
        normalization?: T2SNormalization.AsObject,
        postprocessing?: Postprocessing.AsObject,
    }
}

export class T2SDescription extends jspb.Message { 
    getLanguage(): string;
    setLanguage(value: string): T2SDescription;
    getSpeakerSex(): string;
    setSpeakerSex(value: string): T2SDescription;
    getPipelineOwner(): string;
    setPipelineOwner(value: string): T2SDescription;
    getComments(): string;
    setComments(value: string): T2SDescription;
    getSpeakerName(): string;
    setSpeakerName(value: string): T2SDescription;
    getDomain(): string;
    setDomain(value: string): T2SDescription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): T2SDescription.AsObject;
    static toObject(includeInstance: boolean, msg: T2SDescription): T2SDescription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: T2SDescription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): T2SDescription;
    static deserializeBinaryFromReader(message: T2SDescription, reader: jspb.BinaryReader): T2SDescription;
}

export namespace T2SDescription {
    export type AsObject = {
        language: string,
        speakerSex: string,
        pipelineOwner: string,
        comments: string,
        speakerName: string,
        domain: string,
    }
}

export class T2SInference extends jspb.Message { 
    getType(): string;
    setType(value: string): T2SInference;

    hasCompositeInference(): boolean;
    clearCompositeInference(): void;
    getCompositeInference(): CompositeInference | undefined;
    setCompositeInference(value?: CompositeInference): T2SInference;

    hasCaching(): boolean;
    clearCaching(): void;
    getCaching(): Caching | undefined;
    setCaching(value?: Caching): T2SInference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): T2SInference.AsObject;
    static toObject(includeInstance: boolean, msg: T2SInference): T2SInference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: T2SInference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): T2SInference;
    static deserializeBinaryFromReader(message: T2SInference, reader: jspb.BinaryReader): T2SInference;
}

export namespace T2SInference {
    export type AsObject = {
        type: string,
        compositeInference?: CompositeInference.AsObject,
        caching?: Caching.AsObject,
    }
}

export class CompositeInference extends jspb.Message { 

    hasText2mel(): boolean;
    clearText2mel(): void;
    getText2mel(): Text2Mel | undefined;
    setText2mel(value?: Text2Mel): CompositeInference;

    hasMel2audio(): boolean;
    clearMel2audio(): void;
    getMel2audio(): Mel2Audio | undefined;
    setMel2audio(value?: Mel2Audio): CompositeInference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompositeInference.AsObject;
    static toObject(includeInstance: boolean, msg: CompositeInference): CompositeInference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompositeInference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompositeInference;
    static deserializeBinaryFromReader(message: CompositeInference, reader: jspb.BinaryReader): CompositeInference;
}

export namespace CompositeInference {
    export type AsObject = {
        text2mel?: Text2Mel.AsObject,
        mel2audio?: Mel2Audio.AsObject,
    }
}

export class Text2Mel extends jspb.Message { 
    getType(): string;
    setType(value: string): Text2Mel;

    hasGlowTts(): boolean;
    clearGlowTts(): void;
    getGlowTts(): GlowTTS | undefined;
    setGlowTts(value?: GlowTTS): Text2Mel;

    hasGlowTtsTriton(): boolean;
    clearGlowTtsTriton(): void;
    getGlowTtsTriton(): GlowTTSTriton | undefined;
    setGlowTtsTriton(value?: GlowTTSTriton): Text2Mel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Text2Mel.AsObject;
    static toObject(includeInstance: boolean, msg: Text2Mel): Text2Mel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Text2Mel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Text2Mel;
    static deserializeBinaryFromReader(message: Text2Mel, reader: jspb.BinaryReader): Text2Mel;
}

export namespace Text2Mel {
    export type AsObject = {
        type: string,
        glowTts?: GlowTTS.AsObject,
        glowTtsTriton?: GlowTTSTriton.AsObject,
    }
}

export class GlowTTS extends jspb.Message { 
    getBatchSize(): number;
    setBatchSize(value: number): GlowTTS;
    getUseGpu(): boolean;
    setUseGpu(value: boolean): GlowTTS;
    getLengthScale(): number;
    setLengthScale(value: number): GlowTTS;
    getNoiseScale(): number;
    setNoiseScale(value: number): GlowTTS;
    getPath(): string;
    setPath(value: string): GlowTTS;
    clearCleanersList(): void;
    getCleanersList(): Array<string>;
    setCleanersList(value: Array<string>): GlowTTS;
    addCleaners(value: string, index?: number): string;
    getParamConfigPath(): string;
    setParamConfigPath(value: string): GlowTTS;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlowTTS.AsObject;
    static toObject(includeInstance: boolean, msg: GlowTTS): GlowTTS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlowTTS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlowTTS;
    static deserializeBinaryFromReader(message: GlowTTS, reader: jspb.BinaryReader): GlowTTS;
}

export namespace GlowTTS {
    export type AsObject = {
        batchSize: number,
        useGpu: boolean,
        lengthScale: number,
        noiseScale: number,
        path: string,
        cleanersList: Array<string>,
        paramConfigPath: string,
    }
}

export class GlowTTSTriton extends jspb.Message { 
    getBatchSize(): number;
    setBatchSize(value: number): GlowTTSTriton;
    getLengthScale(): number;
    setLengthScale(value: number): GlowTTSTriton;
    getNoiseScale(): number;
    setNoiseScale(value: number): GlowTTSTriton;
    clearCleanersList(): void;
    getCleanersList(): Array<string>;
    setCleanersList(value: Array<string>): GlowTTSTriton;
    addCleaners(value: string, index?: number): string;
    getMaxTextLength(): number;
    setMaxTextLength(value: number): GlowTTSTriton;
    getParamConfigPath(): string;
    setParamConfigPath(value: string): GlowTTSTriton;
    getTritonModelName(): string;
    setTritonModelName(value: string): GlowTTSTriton;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlowTTSTriton.AsObject;
    static toObject(includeInstance: boolean, msg: GlowTTSTriton): GlowTTSTriton.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlowTTSTriton, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlowTTSTriton;
    static deserializeBinaryFromReader(message: GlowTTSTriton, reader: jspb.BinaryReader): GlowTTSTriton;
}

export namespace GlowTTSTriton {
    export type AsObject = {
        batchSize: number,
        lengthScale: number,
        noiseScale: number,
        cleanersList: Array<string>,
        maxTextLength: number,
        paramConfigPath: string,
        tritonModelName: string,
    }
}

export class Mel2Audio extends jspb.Message { 
    getType(): string;
    setType(value: string): Mel2Audio;

    hasMbMelganTriton(): boolean;
    clearMbMelganTriton(): void;
    getMbMelganTriton(): MbMelganTriton | undefined;
    setMbMelganTriton(value?: MbMelganTriton): Mel2Audio;

    hasHifiGan(): boolean;
    clearHifiGan(): void;
    getHifiGan(): HiFiGan | undefined;
    setHifiGan(value?: HiFiGan): Mel2Audio;

    hasHifiGanTriton(): boolean;
    clearHifiGanTriton(): void;
    getHifiGanTriton(): HiFiGanTriton | undefined;
    setHifiGanTriton(value?: HiFiGanTriton): Mel2Audio;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mel2Audio.AsObject;
    static toObject(includeInstance: boolean, msg: Mel2Audio): Mel2Audio.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mel2Audio, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mel2Audio;
    static deserializeBinaryFromReader(message: Mel2Audio, reader: jspb.BinaryReader): Mel2Audio;
}

export namespace Mel2Audio {
    export type AsObject = {
        type: string,
        mbMelganTriton?: MbMelganTriton.AsObject,
        hifiGan?: HiFiGan.AsObject,
        hifiGanTriton?: HiFiGanTriton.AsObject,
    }
}

export class HiFiGan extends jspb.Message { 
    getUseGpu(): boolean;
    setUseGpu(value: boolean): HiFiGan;
    getBatchSize(): number;
    setBatchSize(value: number): HiFiGan;
    getConfigPath(): string;
    setConfigPath(value: string): HiFiGan;
    getModelPath(): string;
    setModelPath(value: string): HiFiGan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HiFiGan.AsObject;
    static toObject(includeInstance: boolean, msg: HiFiGan): HiFiGan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HiFiGan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HiFiGan;
    static deserializeBinaryFromReader(message: HiFiGan, reader: jspb.BinaryReader): HiFiGan;
}

export namespace HiFiGan {
    export type AsObject = {
        useGpu: boolean,
        batchSize: number,
        configPath: string,
        modelPath: string,
    }
}

export class HiFiGanTriton extends jspb.Message { 
    getConfigPath(): string;
    setConfigPath(value: string): HiFiGanTriton;
    getTritonModelName(): string;
    setTritonModelName(value: string): HiFiGanTriton;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HiFiGanTriton.AsObject;
    static toObject(includeInstance: boolean, msg: HiFiGanTriton): HiFiGanTriton.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HiFiGanTriton, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HiFiGanTriton;
    static deserializeBinaryFromReader(message: HiFiGanTriton, reader: jspb.BinaryReader): HiFiGanTriton;
}

export namespace HiFiGanTriton {
    export type AsObject = {
        configPath: string,
        tritonModelName: string,
    }
}

export class MbMelganTriton extends jspb.Message { 
    getConfigPath(): string;
    setConfigPath(value: string): MbMelganTriton;
    getStatsPath(): string;
    setStatsPath(value: string): MbMelganTriton;
    getTritonModelName(): string;
    setTritonModelName(value: string): MbMelganTriton;
    getTritonUrl(): string;
    setTritonUrl(value: string): MbMelganTriton;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MbMelganTriton.AsObject;
    static toObject(includeInstance: boolean, msg: MbMelganTriton): MbMelganTriton.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MbMelganTriton, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MbMelganTriton;
    static deserializeBinaryFromReader(message: MbMelganTriton, reader: jspb.BinaryReader): MbMelganTriton;
}

export namespace MbMelganTriton {
    export type AsObject = {
        configPath: string,
        statsPath: string,
        tritonModelName: string,
        tritonUrl: string,
    }
}

export class Caching extends jspb.Message { 
    getActive(): boolean;
    setActive(value: boolean): Caching;
    getMemoryCacheMaxSize(): number;
    setMemoryCacheMaxSize(value: number): Caching;
    getSamplingRate(): number;
    setSamplingRate(value: number): Caching;
    getLoadCache(): boolean;
    setLoadCache(value: boolean): Caching;
    getSaveCache(): boolean;
    setSaveCache(value: boolean): Caching;
    getCacheSaveDir(): string;
    setCacheSaveDir(value: string): Caching;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Caching.AsObject;
    static toObject(includeInstance: boolean, msg: Caching): Caching.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Caching, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Caching;
    static deserializeBinaryFromReader(message: Caching, reader: jspb.BinaryReader): Caching;
}

export namespace Caching {
    export type AsObject = {
        active: boolean,
        memoryCacheMaxSize: number,
        samplingRate: number,
        loadCache: boolean,
        saveCache: boolean,
        cacheSaveDir: string,
    }
}

export class T2SNormalization extends jspb.Message { 
    getLanguage(): string;
    setLanguage(value: string): T2SNormalization;
    clearPipelineList(): void;
    getPipelineList(): Array<string>;
    setPipelineList(value: Array<string>): T2SNormalization;
    addPipeline(value: string, index?: number): string;
    getCustomPhonemizerId(): string;
    setCustomPhonemizerId(value: string): T2SNormalization;

    hasCustomLengthScales(): boolean;
    clearCustomLengthScales(): void;
    getCustomLengthScales(): T2SCustomLengthScales | undefined;
    setCustomLengthScales(value?: T2SCustomLengthScales): T2SNormalization;
    getArpabetMapping(): string;
    setArpabetMapping(value: string): T2SNormalization;
    getNumericMapping(): string;
    setNumericMapping(value: string): T2SNormalization;
    getCallsignsMapping(): string;
    setCallsignsMapping(value: string): T2SNormalization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): T2SNormalization.AsObject;
    static toObject(includeInstance: boolean, msg: T2SNormalization): T2SNormalization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: T2SNormalization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): T2SNormalization;
    static deserializeBinaryFromReader(message: T2SNormalization, reader: jspb.BinaryReader): T2SNormalization;
}

export namespace T2SNormalization {
    export type AsObject = {
        language: string,
        pipelineList: Array<string>,
        customPhonemizerId: string,
        customLengthScales?: T2SCustomLengthScales.AsObject,
        arpabetMapping: string,
        numericMapping: string,
        callsignsMapping: string,
    }
}

export class Postprocessing extends jspb.Message { 
    getSilenceSecs(): number;
    setSilenceSecs(value: number): Postprocessing;
    clearPipelineList(): void;
    getPipelineList(): Array<string>;
    setPipelineList(value: Array<string>): Postprocessing;
    addPipeline(value: string, index?: number): string;

    hasLogmmse(): boolean;
    clearLogmmse(): void;
    getLogmmse(): Logmnse | undefined;
    setLogmmse(value?: Logmnse): Postprocessing;

    hasWiener(): boolean;
    clearWiener(): void;
    getWiener(): Wiener | undefined;
    setWiener(value?: Wiener): Postprocessing;

    hasApodization(): boolean;
    clearApodization(): void;
    getApodization(): Apodization | undefined;
    setApodization(value?: Apodization): Postprocessing;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Postprocessing.AsObject;
    static toObject(includeInstance: boolean, msg: Postprocessing): Postprocessing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Postprocessing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Postprocessing;
    static deserializeBinaryFromReader(message: Postprocessing, reader: jspb.BinaryReader): Postprocessing;
}

export namespace Postprocessing {
    export type AsObject = {
        silenceSecs: number,
        pipelineList: Array<string>,
        logmmse?: Logmnse.AsObject,
        wiener?: Wiener.AsObject,
        apodization?: Apodization.AsObject,
    }
}

export class Logmnse extends jspb.Message { 
    getInitialNoise(): number;
    setInitialNoise(value: number): Logmnse;
    getWindowSize(): number;
    setWindowSize(value: number): Logmnse;
    getNoiseThreshold(): number;
    setNoiseThreshold(value: number): Logmnse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Logmnse.AsObject;
    static toObject(includeInstance: boolean, msg: Logmnse): Logmnse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Logmnse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Logmnse;
    static deserializeBinaryFromReader(message: Logmnse, reader: jspb.BinaryReader): Logmnse;
}

export namespace Logmnse {
    export type AsObject = {
        initialNoise: number,
        windowSize: number,
        noiseThreshold: number,
    }
}

export class Wiener extends jspb.Message { 
    getFrameLen(): number;
    setFrameLen(value: number): Wiener;
    getLpcOrder(): number;
    setLpcOrder(value: number): Wiener;
    getIterations(): number;
    setIterations(value: number): Wiener;
    getAlpha(): number;
    setAlpha(value: number): Wiener;
    getThresh(): number;
    setThresh(value: number): Wiener;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Wiener.AsObject;
    static toObject(includeInstance: boolean, msg: Wiener): Wiener.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Wiener, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Wiener;
    static deserializeBinaryFromReader(message: Wiener, reader: jspb.BinaryReader): Wiener;
}

export namespace Wiener {
    export type AsObject = {
        frameLen: number,
        lpcOrder: number,
        iterations: number,
        alpha: number,
        thresh: number,
    }
}

export class Apodization extends jspb.Message { 
    getApodizationSecs(): number;
    setApodizationSecs(value: number): Apodization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Apodization.AsObject;
    static toObject(includeInstance: boolean, msg: Apodization): Apodization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Apodization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Apodization;
    static deserializeBinaryFromReader(message: Apodization, reader: jspb.BinaryReader): Apodization;
}

export namespace Apodization {
    export type AsObject = {
        apodizationSecs: number,
    }
}

export class T2SCustomLengthScales extends jspb.Message { 
    getText(): number;
    setText(value: number): T2SCustomLengthScales;
    getEmail(): number;
    setEmail(value: number): T2SCustomLengthScales;
    getUrl(): number;
    setUrl(value: number): T2SCustomLengthScales;
    getPhone(): number;
    setPhone(value: number): T2SCustomLengthScales;
    getSpell(): number;
    setSpell(value: number): T2SCustomLengthScales;
    getSpellWithNames(): number;
    setSpellWithNames(value: number): T2SCustomLengthScales;
    getCallsignLong(): number;
    setCallsignLong(value: number): T2SCustomLengthScales;
    getCallsignShort(): number;
    setCallsignShort(value: number): T2SCustomLengthScales;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): T2SCustomLengthScales.AsObject;
    static toObject(includeInstance: boolean, msg: T2SCustomLengthScales): T2SCustomLengthScales.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: T2SCustomLengthScales, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): T2SCustomLengthScales;
    static deserializeBinaryFromReader(message: T2SCustomLengthScales, reader: jspb.BinaryReader): T2SCustomLengthScales;
}

export namespace T2SCustomLengthScales {
    export type AsObject = {
        text: number,
        email: number,
        url: number,
        phone: number,
        spell: number,
        spellWithNames: number,
        callsignLong: number,
        callsignShort: number,
    }
}

export class PhonemizerId extends jspb.Message { 
    getId(): string;
    setId(value: string): PhonemizerId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhonemizerId.AsObject;
    static toObject(includeInstance: boolean, msg: PhonemizerId): PhonemizerId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhonemizerId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhonemizerId;
    static deserializeBinaryFromReader(message: PhonemizerId, reader: jspb.BinaryReader): PhonemizerId;
}

export namespace PhonemizerId {
    export type AsObject = {
        id: string,
    }
}

export class CustomPhonemizerProto extends jspb.Message { 
    getId(): string;
    setId(value: string): CustomPhonemizerProto;
    clearMapsList(): void;
    getMapsList(): Array<Map>;
    setMapsList(value: Array<Map>): CustomPhonemizerProto;
    addMaps(value?: Map, index?: number): Map;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomPhonemizerProto.AsObject;
    static toObject(includeInstance: boolean, msg: CustomPhonemizerProto): CustomPhonemizerProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomPhonemizerProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomPhonemizerProto;
    static deserializeBinaryFromReader(message: CustomPhonemizerProto, reader: jspb.BinaryReader): CustomPhonemizerProto;
}

export namespace CustomPhonemizerProto {
    export type AsObject = {
        id: string,
        mapsList: Array<Map.AsObject>,
    }
}

export class Map extends jspb.Message { 
    getWord(): string;
    setWord(value: string): Map;
    getPhonemeGroups(): string;
    setPhonemeGroups(value: string): Map;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Map.AsObject;
    static toObject(includeInstance: boolean, msg: Map): Map.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Map, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Map;
    static deserializeBinaryFromReader(message: Map, reader: jspb.BinaryReader): Map;
}

export namespace Map {
    export type AsObject = {
        word: string,
        phonemeGroups: string,
    }
}

export class ListCustomPhonemizerResponse extends jspb.Message { 
    clearPhonemizersList(): void;
    getPhonemizersList(): Array<CustomPhonemizerProto>;
    setPhonemizersList(value: Array<CustomPhonemizerProto>): ListCustomPhonemizerResponse;
    addPhonemizers(value?: CustomPhonemizerProto, index?: number): CustomPhonemizerProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCustomPhonemizerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCustomPhonemizerResponse): ListCustomPhonemizerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCustomPhonemizerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCustomPhonemizerResponse;
    static deserializeBinaryFromReader(message: ListCustomPhonemizerResponse, reader: jspb.BinaryReader): ListCustomPhonemizerResponse;
}

export namespace ListCustomPhonemizerResponse {
    export type AsObject = {
        phonemizersList: Array<CustomPhonemizerProto.AsObject>,
    }
}

export class ListCustomPhonemizerRequest extends jspb.Message { 
    clearPipelineIdsList(): void;
    getPipelineIdsList(): Array<string>;
    setPipelineIdsList(value: Array<string>): ListCustomPhonemizerRequest;
    addPipelineIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCustomPhonemizerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCustomPhonemizerRequest): ListCustomPhonemizerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCustomPhonemizerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCustomPhonemizerRequest;
    static deserializeBinaryFromReader(message: ListCustomPhonemizerRequest, reader: jspb.BinaryReader): ListCustomPhonemizerRequest;
}

export namespace ListCustomPhonemizerRequest {
    export type AsObject = {
        pipelineIdsList: Array<string>,
    }
}

export class UpdateCustomPhonemizerRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateCustomPhonemizerRequest;
    getUpdateMethod(): UpdateCustomPhonemizerRequest.UpdateMethod;
    setUpdateMethod(value: UpdateCustomPhonemizerRequest.UpdateMethod): UpdateCustomPhonemizerRequest;
    clearMapsList(): void;
    getMapsList(): Array<Map>;
    setMapsList(value: Array<Map>): UpdateCustomPhonemizerRequest;
    addMaps(value?: Map, index?: number): Map;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCustomPhonemizerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCustomPhonemizerRequest): UpdateCustomPhonemizerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCustomPhonemizerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCustomPhonemizerRequest;
    static deserializeBinaryFromReader(message: UpdateCustomPhonemizerRequest, reader: jspb.BinaryReader): UpdateCustomPhonemizerRequest;
}

export namespace UpdateCustomPhonemizerRequest {
    export type AsObject = {
        id: string,
        updateMethod: UpdateCustomPhonemizerRequest.UpdateMethod,
        mapsList: Array<Map.AsObject>,
    }

    export enum UpdateMethod {
    EXTEND_HARD = 0,
    EXTEND_SOFT = 1,
    REPLACE = 2,
    }

}

export class CreateCustomPhonemizerRequest extends jspb.Message { 
    getPrefix(): string;
    setPrefix(value: string): CreateCustomPhonemizerRequest;
    clearMapsList(): void;
    getMapsList(): Array<Map>;
    setMapsList(value: Array<Map>): CreateCustomPhonemizerRequest;
    addMaps(value?: Map, index?: number): Map;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCustomPhonemizerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCustomPhonemizerRequest): CreateCustomPhonemizerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCustomPhonemizerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCustomPhonemizerRequest;
    static deserializeBinaryFromReader(message: CreateCustomPhonemizerRequest, reader: jspb.BinaryReader): CreateCustomPhonemizerRequest;
}

export namespace CreateCustomPhonemizerRequest {
    export type AsObject = {
        prefix: string,
        mapsList: Array<Map.AsObject>,
    }
}

export enum Pcm {
    PCM_16 = 0,
    PCM_24 = 1,
    PCM_32 = 2,
    PCM_S8 = 3,
    PCM_U8 = 4,
    FLOAT = 5,
    DOUBLE = 6,
}

export enum AudioFormat {
    WAV = 0,
    FLAC = 1,
    CAF = 2,
    MP3 = 3,
    AAC = 4,
    OGG = 5,
    WMA = 6,
}

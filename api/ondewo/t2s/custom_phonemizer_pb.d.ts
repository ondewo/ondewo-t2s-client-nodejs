// package: ondewo.t2s
// file: ondewo/t2s/custom_phonemizer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

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

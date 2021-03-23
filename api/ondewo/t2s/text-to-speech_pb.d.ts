// package: ondewo.t2s
// file: ondewo/t2s/text-to-speech.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class SynthesizeRequest extends jspb.Message { 
    getT2sPipelineId(): string;
    setT2sPipelineId(value: string): SynthesizeRequest;
    getText(): string;
    setText(value: string): SynthesizeRequest;
    getLengthScale(): number;
    setLengthScale(value: number): SynthesizeRequest;
    getNoiseScale(): number;
    setNoiseScale(value: number): SynthesizeRequest;
    getSampleRate(): number;
    setSampleRate(value: number): SynthesizeRequest;
    getPcm(): SynthesizeRequest.Pcm;
    setPcm(value: SynthesizeRequest.Pcm): SynthesizeRequest;
    getAudioFormat(): AudioFormat;
    setAudioFormat(value: AudioFormat): SynthesizeRequest;

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
        t2sPipelineId: string,
        text: string,
        lengthScale: number,
        noiseScale: number,
        sampleRate: number,
        pcm: SynthesizeRequest.Pcm,
        audioFormat: AudioFormat,
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

}

export class SynthesizeResponse extends jspb.Message { 
    getAudio(): Uint8Array | string;
    getAudio_asU8(): Uint8Array;
    getAudio_asB64(): string;
    setAudio(value: Uint8Array | string): SynthesizeResponse;
    getGenerationTime(): number;
    setGenerationTime(value: number): SynthesizeResponse;
    getAudioLength(): number;
    setAudioLength(value: number): SynthesizeResponse;
    getT2sPipelineId(): string;
    setT2sPipelineId(value: string): SynthesizeResponse;
    getAudioFormat(): AudioFormat;
    setAudioFormat(value: AudioFormat): SynthesizeResponse;
    getText(): string;
    setText(value: string): SynthesizeResponse;
    getSampleRate(): number;
    setSampleRate(value: number): SynthesizeResponse;

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
        audio: Uint8Array | string,
        generationTime: number,
        audioLength: number,
        t2sPipelineId: string,
        audioFormat: AudioFormat,
        text: string,
        sampleRate: number,
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
    getDescription(): Description | undefined;
    setDescription(value?: Description): Text2SpeechConfig;
    getActive(): boolean;
    setActive(value: boolean): Text2SpeechConfig;

    hasInference(): boolean;
    clearInference(): void;
    getInference(): Inference | undefined;
    setInference(value?: Inference): Text2SpeechConfig;

    hasNormalization(): boolean;
    clearNormalization(): void;
    getNormalization(): Normalization | undefined;
    setNormalization(value?: Normalization): Text2SpeechConfig;

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
        description?: Description.AsObject,
        active: boolean,
        inference?: Inference.AsObject,
        normalization?: Normalization.AsObject,
        postprocessing?: Postprocessing.AsObject,
    }
}

export class Description extends jspb.Message { 
    getLanguage(): string;
    setLanguage(value: string): Description;
    getSpeakerSex(): string;
    setSpeakerSex(value: string): Description;
    getPipelineOwner(): string;
    setPipelineOwner(value: string): Description;
    getComments(): string;
    setComments(value: string): Description;
    getSpeakerName(): string;
    setSpeakerName(value: string): Description;
    getDomain(): string;
    setDomain(value: string): Description;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Description.AsObject;
    static toObject(includeInstance: boolean, msg: Description): Description.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Description, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Description;
    static deserializeBinaryFromReader(message: Description, reader: jspb.BinaryReader): Description;
}

export namespace Description {
    export type AsObject = {
        language: string,
        speakerSex: string,
        pipelineOwner: string,
        comments: string,
        speakerName: string,
        domain: string,
    }
}

export class Inference extends jspb.Message { 
    getType(): string;
    setType(value: string): Inference;

    hasCompositeInference(): boolean;
    clearCompositeInference(): void;
    getCompositeInference(): CompositeInference | undefined;
    setCompositeInference(value?: CompositeInference): Inference;

    hasCaching(): boolean;
    clearCaching(): void;
    getCaching(): Caching | undefined;
    setCaching(value?: Caching): Inference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Inference.AsObject;
    static toObject(includeInstance: boolean, msg: Inference): Inference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Inference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Inference;
    static deserializeBinaryFromReader(message: Inference, reader: jspb.BinaryReader): Inference;
}

export namespace Inference {
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
    getTritonUrl(): string;
    setTritonUrl(value: string): GlowTTSTriton;
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
        tritonUrl: string,
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
    getTritonUrl(): string;
    setTritonUrl(value: string): HiFiGanTriton;

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
        tritonUrl: string,
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

export class Normalization extends jspb.Message { 
    getLanguage(): string;
    setLanguage(value: string): Normalization;
    clearPipelineList(): void;
    getPipelineList(): Array<string>;
    setPipelineList(value: Array<string>): Normalization;
    addPipeline(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Normalization.AsObject;
    static toObject(includeInstance: boolean, msg: Normalization): Normalization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Normalization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Normalization;
    static deserializeBinaryFromReader(message: Normalization, reader: jspb.BinaryReader): Normalization;
}

export namespace Normalization {
    export type AsObject = {
        language: string,
        pipelineList: Array<string>,
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

export enum AudioFormat {
    WAV = 0,
    FLAC = 1,
    CAF = 2,
    MP3 = 3,
    AAC = 4,
    OGG = 5,
    WMA = 6,
}

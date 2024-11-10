// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2020 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_t2s_text$to$speech_pb = require('../../ondewo/t2s/text-to-speech_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_BatchSynthesizeRequest(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.BatchSynthesizeRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.BatchSynthesizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_BatchSynthesizeRequest(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.BatchSynthesizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_BatchSynthesizeResponse(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.BatchSynthesizeResponse)) {
    throw new Error('Expected argument of type ondewo.t2s.BatchSynthesizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_BatchSynthesizeResponse(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.BatchSynthesizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_CreateCustomPhonemizerRequest(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.CreateCustomPhonemizerRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.CreateCustomPhonemizerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_CreateCustomPhonemizerRequest(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.CreateCustomPhonemizerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_CustomPhonemizerProto(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.CustomPhonemizerProto)) {
    throw new Error('Expected argument of type ondewo.t2s.CustomPhonemizerProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_CustomPhonemizerProto(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.CustomPhonemizerProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_ListCustomPhonemizerRequest(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.ListCustomPhonemizerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_ListCustomPhonemizerRequest(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_ListCustomPhonemizerResponse(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerResponse)) {
    throw new Error('Expected argument of type ondewo.t2s.ListCustomPhonemizerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_ListCustomPhonemizerResponse(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_ListT2sDomainsRequest(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.ListT2sDomainsRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.ListT2sDomainsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_ListT2sDomainsRequest(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.ListT2sDomainsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_ListT2sDomainsResponse(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.ListT2sDomainsResponse)) {
    throw new Error('Expected argument of type ondewo.t2s.ListT2sDomainsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_ListT2sDomainsResponse(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.ListT2sDomainsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_ListT2sLanguagesRequest(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.ListT2sLanguagesRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.ListT2sLanguagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_ListT2sLanguagesRequest(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.ListT2sLanguagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_ListT2sLanguagesResponse(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.ListT2sLanguagesResponse)) {
    throw new Error('Expected argument of type ondewo.t2s.ListT2sLanguagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_ListT2sLanguagesResponse(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.ListT2sLanguagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_ListT2sPipelinesRequest(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.ListT2sPipelinesRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.ListT2sPipelinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_ListT2sPipelinesRequest(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.ListT2sPipelinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_ListT2sPipelinesResponse(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.ListT2sPipelinesResponse)) {
    throw new Error('Expected argument of type ondewo.t2s.ListT2sPipelinesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_ListT2sPipelinesResponse(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.ListT2sPipelinesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_NormalizeTextRequest(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.NormalizeTextRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.NormalizeTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_NormalizeTextRequest(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.NormalizeTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_NormalizeTextResponse(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.NormalizeTextResponse)) {
    throw new Error('Expected argument of type ondewo.t2s.NormalizeTextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_NormalizeTextResponse(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.NormalizeTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_PhonemizerId(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.PhonemizerId)) {
    throw new Error('Expected argument of type ondewo.t2s.PhonemizerId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_PhonemizerId(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.PhonemizerId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_SynthesizeRequest(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.SynthesizeRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.SynthesizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_SynthesizeRequest(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.SynthesizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_SynthesizeResponse(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.SynthesizeResponse)) {
    throw new Error('Expected argument of type ondewo.t2s.SynthesizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_SynthesizeResponse(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.SynthesizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_T2SGetServiceInfoResponse(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.T2SGetServiceInfoResponse)) {
    throw new Error('Expected argument of type ondewo.t2s.T2SGetServiceInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_T2SGetServiceInfoResponse(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.T2SGetServiceInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_T2sPipelineId(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.T2sPipelineId)) {
    throw new Error('Expected argument of type ondewo.t2s.T2sPipelineId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_T2sPipelineId(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.T2sPipelineId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_Text2SpeechConfig(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.Text2SpeechConfig)) {
    throw new Error('Expected argument of type ondewo.t2s.Text2SpeechConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_Text2SpeechConfig(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.Text2SpeechConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_UpdateCustomPhonemizerRequest(arg) {
  if (!(arg instanceof ondewo_t2s_text$to$speech_pb.UpdateCustomPhonemizerRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.UpdateCustomPhonemizerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_UpdateCustomPhonemizerRequest(buffer_arg) {
  return ondewo_t2s_text$to$speech_pb.UpdateCustomPhonemizerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Text2Speech service provides endpoints for text-to-speech generation.
var Text2SpeechService = exports.Text2SpeechService = {
  // Synthesize RPC
//
// Synthesizes a specific text sent in the request with the provided configuration requirements
// and retrieves a response that includes the synthesized text as audio and the requested configuration.
synthesize: {
    path: '/ondewo.t2s.Text2Speech/Synthesize',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.SynthesizeRequest,
    responseType: ondewo_t2s_text$to$speech_pb.SynthesizeResponse,
    requestSerialize: serialize_ondewo_t2s_SynthesizeRequest,
    requestDeserialize: deserialize_ondewo_t2s_SynthesizeRequest,
    responseSerialize: serialize_ondewo_t2s_SynthesizeResponse,
    responseDeserialize: deserialize_ondewo_t2s_SynthesizeResponse,
  },
  // BatchSynthesize RPC
//
// Performs batch synthesis by accepting a batch of synthesis requests and returning a batch response.
// This can be more efficient for generating predictions on the AI model in bulk.
batchSynthesize: {
    path: '/ondewo.t2s.Text2Speech/BatchSynthesize',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.BatchSynthesizeRequest,
    responseType: ondewo_t2s_text$to$speech_pb.BatchSynthesizeResponse,
    requestSerialize: serialize_ondewo_t2s_BatchSynthesizeRequest,
    requestDeserialize: deserialize_ondewo_t2s_BatchSynthesizeRequest,
    responseSerialize: serialize_ondewo_t2s_BatchSynthesizeResponse,
    responseDeserialize: deserialize_ondewo_t2s_BatchSynthesizeResponse,
  },
  // NormalizeText RPC
//
// Normalizes a text according to the specific pipeline's normalization rules.
normalizeText: {
    path: '/ondewo.t2s.Text2Speech/NormalizeText',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.NormalizeTextRequest,
    responseType: ondewo_t2s_text$to$speech_pb.NormalizeTextResponse,
    requestSerialize: serialize_ondewo_t2s_NormalizeTextRequest,
    requestDeserialize: deserialize_ondewo_t2s_NormalizeTextRequest,
    responseSerialize: serialize_ondewo_t2s_NormalizeTextResponse,
    responseDeserialize: deserialize_ondewo_t2s_NormalizeTextResponse,
  },
  // GetT2sPipeline RPC
//
// Retrieves the configuration of the specified text-to-speech pipeline.
getT2sPipeline: {
    path: '/ondewo.t2s.Text2Speech/GetT2sPipeline',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.T2sPipelineId,
    responseType: ondewo_t2s_text$to$speech_pb.Text2SpeechConfig,
    requestSerialize: serialize_ondewo_t2s_T2sPipelineId,
    requestDeserialize: deserialize_ondewo_t2s_T2sPipelineId,
    responseSerialize: serialize_ondewo_t2s_Text2SpeechConfig,
    responseDeserialize: deserialize_ondewo_t2s_Text2SpeechConfig,
  },
  // CreateT2sPipeline RPC
//
// Creates a new text-to-speech pipeline with the provided configuration and returns its pipeline ID.
createT2sPipeline: {
    path: '/ondewo.t2s.Text2Speech/CreateT2sPipeline',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.Text2SpeechConfig,
    responseType: ondewo_t2s_text$to$speech_pb.T2sPipelineId,
    requestSerialize: serialize_ondewo_t2s_Text2SpeechConfig,
    requestDeserialize: deserialize_ondewo_t2s_Text2SpeechConfig,
    responseSerialize: serialize_ondewo_t2s_T2sPipelineId,
    responseDeserialize: deserialize_ondewo_t2s_T2sPipelineId,
  },
  // DeleteT2sPipeline RPC
//
// Deletes the specified text-to-speech pipeline.
deleteT2sPipeline: {
    path: '/ondewo.t2s.Text2Speech/DeleteT2sPipeline',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.T2sPipelineId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_t2s_T2sPipelineId,
    requestDeserialize: deserialize_ondewo_t2s_T2sPipelineId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // UpdateT2sPipeline RPC
//
// Updates the specified text-to-speech pipeline with the given configuration.
updateT2sPipeline: {
    path: '/ondewo.t2s.Text2Speech/UpdateT2sPipeline',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.Text2SpeechConfig,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_t2s_Text2SpeechConfig,
    requestDeserialize: deserialize_ondewo_t2s_Text2SpeechConfig,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ListT2sPipelines RPC
//
// Retrieves a list of text-to-speech pipelines based on specific requirements.
listT2sPipelines: {
    path: '/ondewo.t2s.Text2Speech/ListT2sPipelines',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.ListT2sPipelinesRequest,
    responseType: ondewo_t2s_text$to$speech_pb.ListT2sPipelinesResponse,
    requestSerialize: serialize_ondewo_t2s_ListT2sPipelinesRequest,
    requestDeserialize: deserialize_ondewo_t2s_ListT2sPipelinesRequest,
    responseSerialize: serialize_ondewo_t2s_ListT2sPipelinesResponse,
    responseDeserialize: deserialize_ondewo_t2s_ListT2sPipelinesResponse,
  },
  // ListT2sLanguages RPC
//
// Retrieves a list of languages available based on specific configuration requirements.
listT2sLanguages: {
    path: '/ondewo.t2s.Text2Speech/ListT2sLanguages',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.ListT2sLanguagesRequest,
    responseType: ondewo_t2s_text$to$speech_pb.ListT2sLanguagesResponse,
    requestSerialize: serialize_ondewo_t2s_ListT2sLanguagesRequest,
    requestDeserialize: deserialize_ondewo_t2s_ListT2sLanguagesRequest,
    responseSerialize: serialize_ondewo_t2s_ListT2sLanguagesResponse,
    responseDeserialize: deserialize_ondewo_t2s_ListT2sLanguagesResponse,
  },
  // ListT2sDomains RPC
//
// Retrieves a list of domains available based on specific configuration requirements.
listT2sDomains: {
    path: '/ondewo.t2s.Text2Speech/ListT2sDomains',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.ListT2sDomainsRequest,
    responseType: ondewo_t2s_text$to$speech_pb.ListT2sDomainsResponse,
    requestSerialize: serialize_ondewo_t2s_ListT2sDomainsRequest,
    requestDeserialize: deserialize_ondewo_t2s_ListT2sDomainsRequest,
    responseSerialize: serialize_ondewo_t2s_ListT2sDomainsResponse,
    responseDeserialize: deserialize_ondewo_t2s_ListT2sDomainsResponse,
  },
  // GetServiceInfo RPC
//
// Retrieves the version information of the running text-to-speech server.
getServiceInfo: {
    path: '/ondewo.t2s.Text2Speech/GetServiceInfo',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ondewo_t2s_text$to$speech_pb.T2SGetServiceInfoResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ondewo_t2s_T2SGetServiceInfoResponse,
    responseDeserialize: deserialize_ondewo_t2s_T2SGetServiceInfoResponse,
  },
  // GetCustomPhonemizer RPC
//
// Retrieves a custom phonemizer based on the provided PhonemizerId.
getCustomPhonemizer: {
    path: '/ondewo.t2s.Text2Speech/GetCustomPhonemizer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.PhonemizerId,
    responseType: ondewo_t2s_text$to$speech_pb.CustomPhonemizerProto,
    requestSerialize: serialize_ondewo_t2s_PhonemizerId,
    requestDeserialize: deserialize_ondewo_t2s_PhonemizerId,
    responseSerialize: serialize_ondewo_t2s_CustomPhonemizerProto,
    responseDeserialize: deserialize_ondewo_t2s_CustomPhonemizerProto,
  },
  // CreateCustomPhonemizer RPC
//
// Creates a custom phonemizer based on the provided CreateCustomPhonemizerRequest.
// Returns the PhonemizerId associated with the created custom phonemizer.
createCustomPhonemizer: {
    path: '/ondewo.t2s.Text2Speech/CreateCustomPhonemizer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.CreateCustomPhonemizerRequest,
    responseType: ondewo_t2s_text$to$speech_pb.PhonemizerId,
    requestSerialize: serialize_ondewo_t2s_CreateCustomPhonemizerRequest,
    requestDeserialize: deserialize_ondewo_t2s_CreateCustomPhonemizerRequest,
    responseSerialize: serialize_ondewo_t2s_PhonemizerId,
    responseDeserialize: deserialize_ondewo_t2s_PhonemizerId,
  },
  // DeleteCustomPhonemizer RPC
//
// Deletes a custom phonemizer based on the provided PhonemizerId.
// Returns an Empty response upon successful deletion.
deleteCustomPhonemizer: {
    path: '/ondewo.t2s.Text2Speech/DeleteCustomPhonemizer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.PhonemizerId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_t2s_PhonemizerId,
    requestDeserialize: deserialize_ondewo_t2s_PhonemizerId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // UpdateCustomPhonemizer RPC
//
// Updates the specified custom phonemizer with the provided configuration.
updateCustomPhonemizer: {
    path: '/ondewo.t2s.Text2Speech/UpdateCustomPhonemizer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.UpdateCustomPhonemizerRequest,
    responseType: ondewo_t2s_text$to$speech_pb.CustomPhonemizerProto,
    requestSerialize: serialize_ondewo_t2s_UpdateCustomPhonemizerRequest,
    requestDeserialize: deserialize_ondewo_t2s_UpdateCustomPhonemizerRequest,
    responseSerialize: serialize_ondewo_t2s_CustomPhonemizerProto,
    responseDeserialize: deserialize_ondewo_t2s_CustomPhonemizerProto,
  },
  // ListCustomPhonemizer RPC
//
// Retrieves a list of custom phonemizers based on specific requirements.
listCustomPhonemizer: {
    path: '/ondewo.t2s.Text2Speech/ListCustomPhonemizer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerRequest,
    responseType: ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerResponse,
    requestSerialize: serialize_ondewo_t2s_ListCustomPhonemizerRequest,
    requestDeserialize: deserialize_ondewo_t2s_ListCustomPhonemizerRequest,
    responseSerialize: serialize_ondewo_t2s_ListCustomPhonemizerResponse,
    responseDeserialize: deserialize_ondewo_t2s_ListCustomPhonemizerResponse,
  },
};

exports.Text2SpeechClient = grpc.makeGenericClientConstructor(Text2SpeechService);

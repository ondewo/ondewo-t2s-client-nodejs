// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2020 ONDEWO GmbH
// Licensed under the ONDEWO GmbH license, Version 1.0 (the "License");
// you must not use this file except in compliance with the License.
// You must obtain a copy of the License at
// office@ondewo.com
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
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


// endpoints of t2s generate service
var Text2SpeechService = exports.Text2SpeechService = {
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
};

exports.Text2SpeechClient = grpc.makeGenericClientConstructor(Text2SpeechService);

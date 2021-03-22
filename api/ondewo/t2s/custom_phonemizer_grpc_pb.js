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
// limitations under the License.https://ondewo.slack.com/archives/CAWPP61NY
//
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_t2s_custom_phonemizer_pb = require('../../ondewo/t2s/custom_phonemizer_pb.js');
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

function serialize_ondewo_t2s_CreateCustomPhonemizerRequest(arg) {
  if (!(arg instanceof ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.CreateCustomPhonemizerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_CreateCustomPhonemizerRequest(buffer_arg) {
  return ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_CustomPhonemizerProto(arg) {
  if (!(arg instanceof ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto)) {
    throw new Error('Expected argument of type ondewo.t2s.CustomPhonemizerProto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_CustomPhonemizerProto(buffer_arg) {
  return ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_ListCustomPhonemizerRequest(arg) {
  if (!(arg instanceof ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.ListCustomPhonemizerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_ListCustomPhonemizerRequest(buffer_arg) {
  return ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_ListCustomPhonemizerResponse(arg) {
  if (!(arg instanceof ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse)) {
    throw new Error('Expected argument of type ondewo.t2s.ListCustomPhonemizerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_ListCustomPhonemizerResponse(buffer_arg) {
  return ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_PhonemizerId(arg) {
  if (!(arg instanceof ondewo_t2s_custom_phonemizer_pb.PhonemizerId)) {
    throw new Error('Expected argument of type ondewo.t2s.PhonemizerId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_PhonemizerId(buffer_arg) {
  return ondewo_t2s_custom_phonemizer_pb.PhonemizerId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_t2s_UpdateCustomPhonemizerRequest(arg) {
  if (!(arg instanceof ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest)) {
    throw new Error('Expected argument of type ondewo.t2s.UpdateCustomPhonemizerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_t2s_UpdateCustomPhonemizerRequest(buffer_arg) {
  return ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// endpoints of custom phonemizer
var CustomPhonemizersService = exports.CustomPhonemizersService = {
  getCustomPhonemizer: {
    path: '/ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_custom_phonemizer_pb.PhonemizerId,
    responseType: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto,
    requestSerialize: serialize_ondewo_t2s_PhonemizerId,
    requestDeserialize: deserialize_ondewo_t2s_PhonemizerId,
    responseSerialize: serialize_ondewo_t2s_CustomPhonemizerProto,
    responseDeserialize: deserialize_ondewo_t2s_CustomPhonemizerProto,
  },
  createCustomPhonemizer: {
    path: '/ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_custom_phonemizer_pb.CreateCustomPhonemizerRequest,
    responseType: ondewo_t2s_custom_phonemizer_pb.PhonemizerId,
    requestSerialize: serialize_ondewo_t2s_CreateCustomPhonemizerRequest,
    requestDeserialize: deserialize_ondewo_t2s_CreateCustomPhonemizerRequest,
    responseSerialize: serialize_ondewo_t2s_PhonemizerId,
    responseDeserialize: deserialize_ondewo_t2s_PhonemizerId,
  },
  deleteCustomPhonemizer: {
    path: '/ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_custom_phonemizer_pb.PhonemizerId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_t2s_PhonemizerId,
    requestDeserialize: deserialize_ondewo_t2s_PhonemizerId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateCustomPhonemizer: {
    path: '/ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_custom_phonemizer_pb.UpdateCustomPhonemizerRequest,
    responseType: ondewo_t2s_custom_phonemizer_pb.CustomPhonemizerProto,
    requestSerialize: serialize_ondewo_t2s_UpdateCustomPhonemizerRequest,
    requestDeserialize: deserialize_ondewo_t2s_UpdateCustomPhonemizerRequest,
    responseSerialize: serialize_ondewo_t2s_CustomPhonemizerProto,
    responseDeserialize: deserialize_ondewo_t2s_CustomPhonemizerProto,
  },
  listCustomPhonemizer: {
    path: '/ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerRequest,
    responseType: ondewo_t2s_custom_phonemizer_pb.ListCustomPhonemizerResponse,
    requestSerialize: serialize_ondewo_t2s_ListCustomPhonemizerRequest,
    requestDeserialize: deserialize_ondewo_t2s_ListCustomPhonemizerRequest,
    responseSerialize: serialize_ondewo_t2s_ListCustomPhonemizerResponse,
    responseDeserialize: deserialize_ondewo_t2s_ListCustomPhonemizerResponse,
  },
};

exports.CustomPhonemizersClient = grpc.makeGenericClientConstructor(CustomPhonemizersService);

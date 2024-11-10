// source: ondewo/t2s/text-to-speech.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.ondewo.t2s.Apodization', null, global);
goog.exportSymbol('proto.ondewo.t2s.AudioFormat', null, global);
goog.exportSymbol('proto.ondewo.t2s.BatchSynthesizeRequest', null, global);
goog.exportSymbol('proto.ondewo.t2s.BatchSynthesizeResponse', null, global);
goog.exportSymbol('proto.ondewo.t2s.Caching', null, global);
goog.exportSymbol('proto.ondewo.t2s.CompositeInference', null, global);
goog.exportSymbol('proto.ondewo.t2s.CreateCustomPhonemizerRequest', null, global);
goog.exportSymbol('proto.ondewo.t2s.CustomPhonemizerProto', null, global);
goog.exportSymbol('proto.ondewo.t2s.GlowTTS', null, global);
goog.exportSymbol('proto.ondewo.t2s.GlowTTSTriton', null, global);
goog.exportSymbol('proto.ondewo.t2s.HiFiGan', null, global);
goog.exportSymbol('proto.ondewo.t2s.HiFiGanTriton', null, global);
goog.exportSymbol('proto.ondewo.t2s.ListCustomPhonemizerRequest', null, global);
goog.exportSymbol('proto.ondewo.t2s.ListCustomPhonemizerResponse', null, global);
goog.exportSymbol('proto.ondewo.t2s.ListT2sDomainsRequest', null, global);
goog.exportSymbol('proto.ondewo.t2s.ListT2sDomainsResponse', null, global);
goog.exportSymbol('proto.ondewo.t2s.ListT2sLanguagesRequest', null, global);
goog.exportSymbol('proto.ondewo.t2s.ListT2sLanguagesResponse', null, global);
goog.exportSymbol('proto.ondewo.t2s.ListT2sPipelinesRequest', null, global);
goog.exportSymbol('proto.ondewo.t2s.ListT2sPipelinesResponse', null, global);
goog.exportSymbol('proto.ondewo.t2s.Logmnse', null, global);
goog.exportSymbol('proto.ondewo.t2s.Map', null, global);
goog.exportSymbol('proto.ondewo.t2s.MbMelganTriton', null, global);
goog.exportSymbol('proto.ondewo.t2s.Mel2Audio', null, global);
goog.exportSymbol('proto.ondewo.t2s.NormalizeTextRequest', null, global);
goog.exportSymbol('proto.ondewo.t2s.NormalizeTextResponse', null, global);
goog.exportSymbol('proto.ondewo.t2s.Pcm', null, global);
goog.exportSymbol('proto.ondewo.t2s.PhonemizerId', null, global);
goog.exportSymbol('proto.ondewo.t2s.Postprocessing', null, global);
goog.exportSymbol('proto.ondewo.t2s.RequestConfig', null, global);
goog.exportSymbol('proto.ondewo.t2s.RequestConfig.OneofAudioformatCase', null, global);
goog.exportSymbol('proto.ondewo.t2s.RequestConfig.OneofLengthScaleCase', null, global);
goog.exportSymbol('proto.ondewo.t2s.RequestConfig.OneofNoiseScaleCase', null, global);
goog.exportSymbol('proto.ondewo.t2s.RequestConfig.OneofNormalizerCase', null, global);
goog.exportSymbol('proto.ondewo.t2s.RequestConfig.OneofPcmCase', null, global);
goog.exportSymbol('proto.ondewo.t2s.RequestConfig.OneofSampleRateCase', null, global);
goog.exportSymbol('proto.ondewo.t2s.RequestConfig.OneofUseCacheCase', null, global);
goog.exportSymbol('proto.ondewo.t2s.SingleInference', null, global);
goog.exportSymbol('proto.ondewo.t2s.SynthesizeRequest', null, global);
goog.exportSymbol('proto.ondewo.t2s.SynthesizeResponse', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2SCustomLengthScales', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2SDescription', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2SGetServiceInfoResponse', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2SInference', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2SNormalization', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2sCloudProviderConfig', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2sCloudProviderConfigGoogle', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2sCloudServiceAmazon', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2sCloudServiceElevenLabs', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2sCloudServiceGoogle', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2sCloudServiceMicrosoft', null, global);
goog.exportSymbol('proto.ondewo.t2s.T2sPipelineId', null, global);
goog.exportSymbol('proto.ondewo.t2s.Text2Audio', null, global);
goog.exportSymbol('proto.ondewo.t2s.Text2Mel', null, global);
goog.exportSymbol('proto.ondewo.t2s.Text2SpeechConfig', null, global);
goog.exportSymbol('proto.ondewo.t2s.UpdateCustomPhonemizerRequest', null, global);
goog.exportSymbol('proto.ondewo.t2s.UpdateCustomPhonemizerRequest.UpdateMethod', null, global);
goog.exportSymbol('proto.ondewo.t2s.Vits', null, global);
goog.exportSymbol('proto.ondewo.t2s.VitsTriton', null, global);
goog.exportSymbol('proto.ondewo.t2s.VoiceSettings', null, global);
goog.exportSymbol('proto.ondewo.t2s.Wiener', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.SynthesizeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.SynthesizeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.SynthesizeRequest.displayName = 'proto.ondewo.t2s.SynthesizeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.BatchSynthesizeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.BatchSynthesizeRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.BatchSynthesizeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.BatchSynthesizeRequest.displayName = 'proto.ondewo.t2s.BatchSynthesizeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.BatchSynthesizeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.BatchSynthesizeResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.BatchSynthesizeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.BatchSynthesizeResponse.displayName = 'proto.ondewo.t2s.BatchSynthesizeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.RequestConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.t2s.RequestConfig.oneofGroups_);
};
goog.inherits(proto.ondewo.t2s.RequestConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.RequestConfig.displayName = 'proto.ondewo.t2s.RequestConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2sCloudProviderConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2sCloudProviderConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2sCloudProviderConfig.displayName = 'proto.ondewo.t2s.T2sCloudProviderConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.displayName = 'proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.displayName = 'proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2sCloudProviderConfigGoogle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2sCloudProviderConfigGoogle.displayName = 'proto.ondewo.t2s.T2sCloudProviderConfigGoogle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.SynthesizeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.SynthesizeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.SynthesizeResponse.displayName = 'proto.ondewo.t2s.SynthesizeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.NormalizeTextRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.NormalizeTextRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.NormalizeTextRequest.displayName = 'proto.ondewo.t2s.NormalizeTextRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.NormalizeTextResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.NormalizeTextResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.NormalizeTextResponse.displayName = 'proto.ondewo.t2s.NormalizeTextResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2SGetServiceInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2SGetServiceInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2SGetServiceInfoResponse.displayName = 'proto.ondewo.t2s.T2SGetServiceInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.ListT2sPipelinesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.ListT2sPipelinesRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.ListT2sPipelinesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.ListT2sPipelinesRequest.displayName = 'proto.ondewo.t2s.ListT2sPipelinesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.ListT2sPipelinesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.ListT2sPipelinesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.ListT2sPipelinesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.ListT2sPipelinesResponse.displayName = 'proto.ondewo.t2s.ListT2sPipelinesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.ListT2sLanguagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.ListT2sLanguagesRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.ListT2sLanguagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.ListT2sLanguagesRequest.displayName = 'proto.ondewo.t2s.ListT2sLanguagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.ListT2sLanguagesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.ListT2sLanguagesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.ListT2sLanguagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.ListT2sLanguagesResponse.displayName = 'proto.ondewo.t2s.ListT2sLanguagesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.ListT2sDomainsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.ListT2sDomainsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.ListT2sDomainsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.ListT2sDomainsRequest.displayName = 'proto.ondewo.t2s.ListT2sDomainsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.ListT2sDomainsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.ListT2sDomainsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.ListT2sDomainsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.ListT2sDomainsResponse.displayName = 'proto.ondewo.t2s.ListT2sDomainsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2sPipelineId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2sPipelineId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2sPipelineId.displayName = 'proto.ondewo.t2s.T2sPipelineId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Text2SpeechConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.Text2SpeechConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Text2SpeechConfig.displayName = 'proto.ondewo.t2s.Text2SpeechConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2SDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2SDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2SDescription.displayName = 'proto.ondewo.t2s.T2SDescription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2SInference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2SInference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2SInference.displayName = 'proto.ondewo.t2s.T2SInference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.CompositeInference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.CompositeInference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.CompositeInference.displayName = 'proto.ondewo.t2s.CompositeInference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.SingleInference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.SingleInference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.SingleInference.displayName = 'proto.ondewo.t2s.SingleInference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Text2Mel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.Text2Mel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Text2Mel.displayName = 'proto.ondewo.t2s.Text2Mel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Text2Audio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.Text2Audio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Text2Audio.displayName = 'proto.ondewo.t2s.Text2Audio';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.GlowTTS = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.GlowTTS.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.GlowTTS, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.GlowTTS.displayName = 'proto.ondewo.t2s.GlowTTS';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.GlowTTSTriton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.GlowTTSTriton.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.GlowTTSTriton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.GlowTTSTriton.displayName = 'proto.ondewo.t2s.GlowTTSTriton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Vits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.Vits.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.Vits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Vits.displayName = 'proto.ondewo.t2s.Vits';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.VitsTriton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.VitsTriton.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.VitsTriton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.VitsTriton.displayName = 'proto.ondewo.t2s.VitsTriton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2sCloudServiceElevenLabs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2sCloudServiceElevenLabs.displayName = 'proto.ondewo.t2s.T2sCloudServiceElevenLabs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.VoiceSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.VoiceSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.VoiceSettings.displayName = 'proto.ondewo.t2s.VoiceSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2sCloudServiceAmazon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2sCloudServiceAmazon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2sCloudServiceAmazon.displayName = 'proto.ondewo.t2s.T2sCloudServiceAmazon';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2sCloudServiceGoogle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2sCloudServiceGoogle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2sCloudServiceGoogle.displayName = 'proto.ondewo.t2s.T2sCloudServiceGoogle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2sCloudServiceMicrosoft, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2sCloudServiceMicrosoft.displayName = 'proto.ondewo.t2s.T2sCloudServiceMicrosoft';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Mel2Audio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.Mel2Audio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Mel2Audio.displayName = 'proto.ondewo.t2s.Mel2Audio';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.HiFiGan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.HiFiGan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.HiFiGan.displayName = 'proto.ondewo.t2s.HiFiGan';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.HiFiGanTriton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.HiFiGanTriton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.HiFiGanTriton.displayName = 'proto.ondewo.t2s.HiFiGanTriton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.MbMelganTriton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.MbMelganTriton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.MbMelganTriton.displayName = 'proto.ondewo.t2s.MbMelganTriton';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Caching = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.Caching, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Caching.displayName = 'proto.ondewo.t2s.Caching';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2SNormalization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.T2SNormalization.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.T2SNormalization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2SNormalization.displayName = 'proto.ondewo.t2s.T2SNormalization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Postprocessing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.Postprocessing.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.Postprocessing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Postprocessing.displayName = 'proto.ondewo.t2s.Postprocessing';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Logmnse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.Logmnse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Logmnse.displayName = 'proto.ondewo.t2s.Logmnse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Wiener = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.Wiener, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Wiener.displayName = 'proto.ondewo.t2s.Wiener';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Apodization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.Apodization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Apodization.displayName = 'proto.ondewo.t2s.Apodization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.T2SCustomLengthScales = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.T2SCustomLengthScales, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.T2SCustomLengthScales.displayName = 'proto.ondewo.t2s.T2SCustomLengthScales';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.PhonemizerId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.PhonemizerId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.PhonemizerId.displayName = 'proto.ondewo.t2s.PhonemizerId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.CustomPhonemizerProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.CustomPhonemizerProto.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.CustomPhonemizerProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.CustomPhonemizerProto.displayName = 'proto.ondewo.t2s.CustomPhonemizerProto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.Map = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.t2s.Map, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.Map.displayName = 'proto.ondewo.t2s.Map';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.ListCustomPhonemizerResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.ListCustomPhonemizerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.ListCustomPhonemizerResponse.displayName = 'proto.ondewo.t2s.ListCustomPhonemizerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.ListCustomPhonemizerRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.ListCustomPhonemizerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.ListCustomPhonemizerRequest.displayName = 'proto.ondewo.t2s.ListCustomPhonemizerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.UpdateCustomPhonemizerRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.UpdateCustomPhonemizerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.UpdateCustomPhonemizerRequest.displayName = 'proto.ondewo.t2s.UpdateCustomPhonemizerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.t2s.CreateCustomPhonemizerRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.t2s.CreateCustomPhonemizerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.t2s.CreateCustomPhonemizerRequest.displayName = 'proto.ondewo.t2s.CreateCustomPhonemizerRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.SynthesizeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.SynthesizeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.SynthesizeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.SynthesizeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.ondewo.t2s.RequestConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.SynthesizeRequest}
 */
proto.ondewo.t2s.SynthesizeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.SynthesizeRequest;
  return proto.ondewo.t2s.SynthesizeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.SynthesizeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.SynthesizeRequest}
 */
proto.ondewo.t2s.SynthesizeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new proto.ondewo.t2s.RequestConfig;
      reader.readMessage(value,proto.ondewo.t2s.RequestConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.SynthesizeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.SynthesizeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.SynthesizeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.SynthesizeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.t2s.RequestConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.ondewo.t2s.SynthesizeRequest.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.SynthesizeRequest} returns this
 */
proto.ondewo.t2s.SynthesizeRequest.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RequestConfig config = 2;
 * @return {?proto.ondewo.t2s.RequestConfig}
 */
proto.ondewo.t2s.SynthesizeRequest.prototype.getConfig = function() {
  return /** @type{?proto.ondewo.t2s.RequestConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.RequestConfig, 2));
};


/**
 * @param {?proto.ondewo.t2s.RequestConfig|undefined} value
 * @return {!proto.ondewo.t2s.SynthesizeRequest} returns this
*/
proto.ondewo.t2s.SynthesizeRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.SynthesizeRequest} returns this
 */
proto.ondewo.t2s.SynthesizeRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.SynthesizeRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.BatchSynthesizeRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.BatchSynthesizeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.BatchSynthesizeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.BatchSynthesizeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.BatchSynthesizeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchRequestList: jspb.Message.toObjectList(msg.getBatchRequestList(),
    proto.ondewo.t2s.SynthesizeRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.BatchSynthesizeRequest}
 */
proto.ondewo.t2s.BatchSynthesizeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.BatchSynthesizeRequest;
  return proto.ondewo.t2s.BatchSynthesizeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.BatchSynthesizeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.BatchSynthesizeRequest}
 */
proto.ondewo.t2s.BatchSynthesizeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.t2s.SynthesizeRequest;
      reader.readMessage(value,proto.ondewo.t2s.SynthesizeRequest.deserializeBinaryFromReader);
      msg.addBatchRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.BatchSynthesizeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.BatchSynthesizeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.BatchSynthesizeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.BatchSynthesizeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchRequestList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.t2s.SynthesizeRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SynthesizeRequest batch_request = 1;
 * @return {!Array<!proto.ondewo.t2s.SynthesizeRequest>}
 */
proto.ondewo.t2s.BatchSynthesizeRequest.prototype.getBatchRequestList = function() {
  return /** @type{!Array<!proto.ondewo.t2s.SynthesizeRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.t2s.SynthesizeRequest, 1));
};


/**
 * @param {!Array<!proto.ondewo.t2s.SynthesizeRequest>} value
 * @return {!proto.ondewo.t2s.BatchSynthesizeRequest} returns this
*/
proto.ondewo.t2s.BatchSynthesizeRequest.prototype.setBatchRequestList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.t2s.SynthesizeRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.SynthesizeRequest}
 */
proto.ondewo.t2s.BatchSynthesizeRequest.prototype.addBatchRequest = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.t2s.SynthesizeRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.BatchSynthesizeRequest} returns this
 */
proto.ondewo.t2s.BatchSynthesizeRequest.prototype.clearBatchRequestList = function() {
  return this.setBatchRequestList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.BatchSynthesizeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.BatchSynthesizeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.BatchSynthesizeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.BatchSynthesizeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.BatchSynthesizeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchResponseList: jspb.Message.toObjectList(msg.getBatchResponseList(),
    proto.ondewo.t2s.SynthesizeResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.BatchSynthesizeResponse}
 */
proto.ondewo.t2s.BatchSynthesizeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.BatchSynthesizeResponse;
  return proto.ondewo.t2s.BatchSynthesizeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.BatchSynthesizeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.BatchSynthesizeResponse}
 */
proto.ondewo.t2s.BatchSynthesizeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.t2s.SynthesizeResponse;
      reader.readMessage(value,proto.ondewo.t2s.SynthesizeResponse.deserializeBinaryFromReader);
      msg.addBatchResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.BatchSynthesizeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.BatchSynthesizeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.BatchSynthesizeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.BatchSynthesizeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchResponseList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.t2s.SynthesizeResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SynthesizeResponse batch_response = 1;
 * @return {!Array<!proto.ondewo.t2s.SynthesizeResponse>}
 */
proto.ondewo.t2s.BatchSynthesizeResponse.prototype.getBatchResponseList = function() {
  return /** @type{!Array<!proto.ondewo.t2s.SynthesizeResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.t2s.SynthesizeResponse, 1));
};


/**
 * @param {!Array<!proto.ondewo.t2s.SynthesizeResponse>} value
 * @return {!proto.ondewo.t2s.BatchSynthesizeResponse} returns this
*/
proto.ondewo.t2s.BatchSynthesizeResponse.prototype.setBatchResponseList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.t2s.SynthesizeResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.SynthesizeResponse}
 */
proto.ondewo.t2s.BatchSynthesizeResponse.prototype.addBatchResponse = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.t2s.SynthesizeResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.BatchSynthesizeResponse} returns this
 */
proto.ondewo.t2s.BatchSynthesizeResponse.prototype.clearBatchResponseList = function() {
  return this.setBatchResponseList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.t2s.RequestConfig.oneofGroups_ = [[2],[3],[4],[5],[6],[7],[8]];

/**
 * @enum {number}
 */
proto.ondewo.t2s.RequestConfig.OneofLengthScaleCase = {
  ONEOF_LENGTH_SCALE_NOT_SET: 0,
  LENGTH_SCALE: 2
};

/**
 * @return {proto.ondewo.t2s.RequestConfig.OneofLengthScaleCase}
 */
proto.ondewo.t2s.RequestConfig.prototype.getOneofLengthScaleCase = function() {
  return /** @type {proto.ondewo.t2s.RequestConfig.OneofLengthScaleCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.t2s.RequestConfig.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.ondewo.t2s.RequestConfig.OneofNoiseScaleCase = {
  ONEOF_NOISE_SCALE_NOT_SET: 0,
  NOISE_SCALE: 3
};

/**
 * @return {proto.ondewo.t2s.RequestConfig.OneofNoiseScaleCase}
 */
proto.ondewo.t2s.RequestConfig.prototype.getOneofNoiseScaleCase = function() {
  return /** @type {proto.ondewo.t2s.RequestConfig.OneofNoiseScaleCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.t2s.RequestConfig.oneofGroups_[1]));
};

/**
 * @enum {number}
 */
proto.ondewo.t2s.RequestConfig.OneofSampleRateCase = {
  ONEOF_SAMPLE_RATE_NOT_SET: 0,
  SAMPLE_RATE: 4
};

/**
 * @return {proto.ondewo.t2s.RequestConfig.OneofSampleRateCase}
 */
proto.ondewo.t2s.RequestConfig.prototype.getOneofSampleRateCase = function() {
  return /** @type {proto.ondewo.t2s.RequestConfig.OneofSampleRateCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.t2s.RequestConfig.oneofGroups_[2]));
};

/**
 * @enum {number}
 */
proto.ondewo.t2s.RequestConfig.OneofPcmCase = {
  ONEOF_PCM_NOT_SET: 0,
  PCM: 5
};

/**
 * @return {proto.ondewo.t2s.RequestConfig.OneofPcmCase}
 */
proto.ondewo.t2s.RequestConfig.prototype.getOneofPcmCase = function() {
  return /** @type {proto.ondewo.t2s.RequestConfig.OneofPcmCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.t2s.RequestConfig.oneofGroups_[3]));
};

/**
 * @enum {number}
 */
proto.ondewo.t2s.RequestConfig.OneofAudioformatCase = {
  ONEOF_AUDIOFORMAT_NOT_SET: 0,
  AUDIO_FORMAT: 6
};

/**
 * @return {proto.ondewo.t2s.RequestConfig.OneofAudioformatCase}
 */
proto.ondewo.t2s.RequestConfig.prototype.getOneofAudioformatCase = function() {
  return /** @type {proto.ondewo.t2s.RequestConfig.OneofAudioformatCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.t2s.RequestConfig.oneofGroups_[4]));
};

/**
 * @enum {number}
 */
proto.ondewo.t2s.RequestConfig.OneofUseCacheCase = {
  ONEOF_USE_CACHE_NOT_SET: 0,
  USE_CACHE: 7
};

/**
 * @return {proto.ondewo.t2s.RequestConfig.OneofUseCacheCase}
 */
proto.ondewo.t2s.RequestConfig.prototype.getOneofUseCacheCase = function() {
  return /** @type {proto.ondewo.t2s.RequestConfig.OneofUseCacheCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.t2s.RequestConfig.oneofGroups_[5]));
};

/**
 * @enum {number}
 */
proto.ondewo.t2s.RequestConfig.OneofNormalizerCase = {
  ONEOF_NORMALIZER_NOT_SET: 0,
  NORMALIZER: 8
};

/**
 * @return {proto.ondewo.t2s.RequestConfig.OneofNormalizerCase}
 */
proto.ondewo.t2s.RequestConfig.prototype.getOneofNormalizerCase = function() {
  return /** @type {proto.ondewo.t2s.RequestConfig.OneofNormalizerCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.t2s.RequestConfig.oneofGroups_[6]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.RequestConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.RequestConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.RequestConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.RequestConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    t2sPipelineId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lengthScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    noiseScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    sampleRate: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pcm: jspb.Message.getFieldWithDefault(msg, 5, 0),
    audioFormat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    useCache: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    normalizer: jspb.Message.getFieldWithDefault(msg, 8, ""),
    t2sServiceConfig: (f = msg.getT2sServiceConfig()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    t2sCloudProviderConfig: (f = msg.getT2sCloudProviderConfig()) && proto.ondewo.t2s.T2sCloudProviderConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.RequestConfig}
 */
proto.ondewo.t2s.RequestConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.RequestConfig;
  return proto.ondewo.t2s.RequestConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.RequestConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.RequestConfig}
 */
proto.ondewo.t2s.RequestConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setT2sPipelineId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLengthScale(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setNoiseScale(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSampleRate(value);
      break;
    case 5:
      var value = /** @type {!proto.ondewo.t2s.Pcm} */ (reader.readEnum());
      msg.setPcm(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.t2s.AudioFormat} */ (reader.readEnum());
      msg.setAudioFormat(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseCache(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNormalizer(value);
      break;
    case 9:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setT2sServiceConfig(value);
      break;
    case 10:
      var value = new proto.ondewo.t2s.T2sCloudProviderConfig;
      reader.readMessage(value,proto.ondewo.t2s.T2sCloudProviderConfig.deserializeBinaryFromReader);
      msg.setT2sCloudProviderConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.RequestConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.RequestConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.RequestConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.RequestConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getT2sPipelineId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {!proto.ondewo.t2s.Pcm} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.ondewo.t2s.AudioFormat} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getT2sServiceConfig();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getT2sCloudProviderConfig();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ondewo.t2s.T2sCloudProviderConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string t2s_pipeline_id = 1;
 * @return {string}
 */
proto.ondewo.t2s.RequestConfig.prototype.getT2sPipelineId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.setT2sPipelineId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float length_scale = 2;
 * @return {number}
 */
proto.ondewo.t2s.RequestConfig.prototype.getLengthScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.setLengthScale = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.t2s.RequestConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.clearLengthScale = function() {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.t2s.RequestConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.RequestConfig.prototype.hasLengthScale = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float noise_scale = 3;
 * @return {number}
 */
proto.ondewo.t2s.RequestConfig.prototype.getNoiseScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.setNoiseScale = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.t2s.RequestConfig.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.clearNoiseScale = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.t2s.RequestConfig.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.RequestConfig.prototype.hasNoiseScale = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 sample_rate = 4;
 * @return {number}
 */
proto.ondewo.t2s.RequestConfig.prototype.getSampleRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.setSampleRate = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.ondewo.t2s.RequestConfig.oneofGroups_[2], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.clearSampleRate = function() {
  return jspb.Message.setOneofField(this, 4, proto.ondewo.t2s.RequestConfig.oneofGroups_[2], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.RequestConfig.prototype.hasSampleRate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Pcm pcm = 5;
 * @return {!proto.ondewo.t2s.Pcm}
 */
proto.ondewo.t2s.RequestConfig.prototype.getPcm = function() {
  return /** @type {!proto.ondewo.t2s.Pcm} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ondewo.t2s.Pcm} value
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.setPcm = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.ondewo.t2s.RequestConfig.oneofGroups_[3], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.clearPcm = function() {
  return jspb.Message.setOneofField(this, 5, proto.ondewo.t2s.RequestConfig.oneofGroups_[3], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.RequestConfig.prototype.hasPcm = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AudioFormat audio_format = 6;
 * @return {!proto.ondewo.t2s.AudioFormat}
 */
proto.ondewo.t2s.RequestConfig.prototype.getAudioFormat = function() {
  return /** @type {!proto.ondewo.t2s.AudioFormat} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.t2s.AudioFormat} value
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.setAudioFormat = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.ondewo.t2s.RequestConfig.oneofGroups_[4], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.clearAudioFormat = function() {
  return jspb.Message.setOneofField(this, 6, proto.ondewo.t2s.RequestConfig.oneofGroups_[4], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.RequestConfig.prototype.hasAudioFormat = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool use_cache = 7;
 * @return {boolean}
 */
proto.ondewo.t2s.RequestConfig.prototype.getUseCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.setUseCache = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.ondewo.t2s.RequestConfig.oneofGroups_[5], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.clearUseCache = function() {
  return jspb.Message.setOneofField(this, 7, proto.ondewo.t2s.RequestConfig.oneofGroups_[5], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.RequestConfig.prototype.hasUseCache = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string normalizer = 8;
 * @return {string}
 */
proto.ondewo.t2s.RequestConfig.prototype.getNormalizer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.setNormalizer = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.ondewo.t2s.RequestConfig.oneofGroups_[6], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.clearNormalizer = function() {
  return jspb.Message.setOneofField(this, 8, proto.ondewo.t2s.RequestConfig.oneofGroups_[6], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.RequestConfig.prototype.hasNormalizer = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Struct t2s_service_config = 9;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.t2s.RequestConfig.prototype.getT2sServiceConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 9));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
*/
proto.ondewo.t2s.RequestConfig.prototype.setT2sServiceConfig = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.clearT2sServiceConfig = function() {
  return this.setT2sServiceConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.RequestConfig.prototype.hasT2sServiceConfig = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional T2sCloudProviderConfig t2s_cloud_provider_config = 10;
 * @return {?proto.ondewo.t2s.T2sCloudProviderConfig}
 */
proto.ondewo.t2s.RequestConfig.prototype.getT2sCloudProviderConfig = function() {
  return /** @type{?proto.ondewo.t2s.T2sCloudProviderConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2sCloudProviderConfig, 10));
};


/**
 * @param {?proto.ondewo.t2s.T2sCloudProviderConfig|undefined} value
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
*/
proto.ondewo.t2s.RequestConfig.prototype.setT2sCloudProviderConfig = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.RequestConfig} returns this
 */
proto.ondewo.t2s.RequestConfig.prototype.clearT2sCloudProviderConfig = function() {
  return this.setT2sCloudProviderConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.RequestConfig.prototype.hasT2sCloudProviderConfig = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2sCloudProviderConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudProviderConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    t2sCloudProviderConfigElevenlabs: (f = msg.getT2sCloudProviderConfigElevenlabs()) && proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.toObject(includeInstance, f),
    t2sCloudProviderConfigGoogle: (f = msg.getT2sCloudProviderConfigGoogle()) && proto.ondewo.t2s.T2sCloudProviderConfigGoogle.toObject(includeInstance, f),
    t2sCloudProviderConfigMicrosoft: (f = msg.getT2sCloudProviderConfigMicrosoft()) && proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfig}
 */
proto.ondewo.t2s.T2sCloudProviderConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2sCloudProviderConfig;
  return proto.ondewo.t2s.T2sCloudProviderConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfig}
 */
proto.ondewo.t2s.T2sCloudProviderConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs;
      reader.readMessage(value,proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.deserializeBinaryFromReader);
      msg.setT2sCloudProviderConfigElevenlabs(value);
      break;
    case 2:
      var value = new proto.ondewo.t2s.T2sCloudProviderConfigGoogle;
      reader.readMessage(value,proto.ondewo.t2s.T2sCloudProviderConfigGoogle.deserializeBinaryFromReader);
      msg.setT2sCloudProviderConfigGoogle(value);
      break;
    case 3:
      var value = new proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft;
      reader.readMessage(value,proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.deserializeBinaryFromReader);
      msg.setT2sCloudProviderConfigMicrosoft(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2sCloudProviderConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudProviderConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getT2sCloudProviderConfigElevenlabs();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.serializeBinaryToWriter
    );
  }
  f = message.getT2sCloudProviderConfigGoogle();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.t2s.T2sCloudProviderConfigGoogle.serializeBinaryToWriter
    );
  }
  f = message.getT2sCloudProviderConfigMicrosoft();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.serializeBinaryToWriter
    );
  }
};


/**
 * optional T2sCloudProviderConfigElevenLabs t2s_cloud_provider_config_elevenlabs = 1;
 * @return {?proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs}
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.getT2sCloudProviderConfigElevenlabs = function() {
  return /** @type{?proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs, 1));
};


/**
 * @param {?proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs|undefined} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfig} returns this
*/
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.setT2sCloudProviderConfigElevenlabs = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfig} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.clearT2sCloudProviderConfigElevenlabs = function() {
  return this.setT2sCloudProviderConfigElevenlabs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.hasT2sCloudProviderConfigElevenlabs = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional T2sCloudProviderConfigGoogle t2s_cloud_provider_config_google = 2;
 * @return {?proto.ondewo.t2s.T2sCloudProviderConfigGoogle}
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.getT2sCloudProviderConfigGoogle = function() {
  return /** @type{?proto.ondewo.t2s.T2sCloudProviderConfigGoogle} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2sCloudProviderConfigGoogle, 2));
};


/**
 * @param {?proto.ondewo.t2s.T2sCloudProviderConfigGoogle|undefined} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfig} returns this
*/
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.setT2sCloudProviderConfigGoogle = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfig} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.clearT2sCloudProviderConfigGoogle = function() {
  return this.setT2sCloudProviderConfigGoogle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.hasT2sCloudProviderConfigGoogle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional T2sCloudProviderConfigMicrosoft t2s_cloud_provider_config_microsoft = 3;
 * @return {?proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft}
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.getT2sCloudProviderConfigMicrosoft = function() {
  return /** @type{?proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft, 3));
};


/**
 * @param {?proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft|undefined} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfig} returns this
*/
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.setT2sCloudProviderConfigMicrosoft = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfig} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.clearT2sCloudProviderConfigMicrosoft = function() {
  return this.setT2sCloudProviderConfigMicrosoft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.T2sCloudProviderConfig.prototype.hasT2sCloudProviderConfigMicrosoft = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.toObject = function(includeInstance, msg) {
  var f, obj = {
    stability: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    similarityBoost: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    style: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    useSpeakerBoost: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    applyTextNormalization: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs}
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs;
  return proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs}
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStability(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSimilarityBoost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStyle(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseSpeakerBoost(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplyTextNormalization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStability();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSimilarityBoost();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getUseSpeakerBoost();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getApplyTextNormalization();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional float stability = 1;
 * @return {number}
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.getStability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.setStability = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float similarity_boost = 2;
 * @return {number}
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.getSimilarityBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.setSimilarityBoost = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float style = 3;
 * @return {number}
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.getStyle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.setStyle = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional bool use_speaker_boost = 4;
 * @return {boolean}
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.getUseSpeakerBoost = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.setUseSpeakerBoost = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string apply_text_normalization = 5;
 * @return {string}
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.getApplyTextNormalization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfigElevenLabs.prototype.setApplyTextNormalization = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.toObject = function(includeInstance, msg) {
  var f, obj = {
    useDefaultSpeaker: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft}
 */
proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft;
  return proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft}
 */
proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseDefaultSpeaker(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseDefaultSpeaker();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool use_default_speaker = 1;
 * @return {boolean}
 */
proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.prototype.getUseDefaultSpeaker = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfigMicrosoft.prototype.setUseDefaultSpeaker = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2sCloudProviderConfigGoogle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfigGoogle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.toObject = function(includeInstance, msg) {
  var f, obj = {
    speakingRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    volumeGainDb: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    pitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigGoogle}
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2sCloudProviderConfigGoogle;
  return proto.ondewo.t2s.T2sCloudProviderConfigGoogle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfigGoogle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigGoogle}
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpeakingRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVolumeGainDb(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPitch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2sCloudProviderConfigGoogle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2sCloudProviderConfigGoogle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeakingRate();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getVolumeGainDb();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getPitch();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float speaking_rate = 1;
 * @return {number}
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.prototype.getSpeakingRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigGoogle} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.prototype.setSpeakingRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float volume_gain_db = 2;
 * @return {number}
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.prototype.getVolumeGainDb = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigGoogle} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.prototype.setVolumeGainDb = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float pitch = 3;
 * @return {number}
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.prototype.getPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2sCloudProviderConfigGoogle} returns this
 */
proto.ondewo.t2s.T2sCloudProviderConfigGoogle.prototype.setPitch = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.SynthesizeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.SynthesizeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.SynthesizeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    audioUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    audio: msg.getAudio_asB64(),
    generationTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    audioLength: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    text: jspb.Message.getFieldWithDefault(msg, 5, ""),
    config: (f = msg.getConfig()) && proto.ondewo.t2s.RequestConfig.toObject(includeInstance, f),
    normalizedText: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.SynthesizeResponse}
 */
proto.ondewo.t2s.SynthesizeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.SynthesizeResponse;
  return proto.ondewo.t2s.SynthesizeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.SynthesizeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.SynthesizeResponse}
 */
proto.ondewo.t2s.SynthesizeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAudioUuid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudio(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGenerationTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAudioLength(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 6:
      var value = new proto.ondewo.t2s.RequestConfig;
      reader.readMessage(value,proto.ondewo.t2s.RequestConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNormalizedText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.SynthesizeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.SynthesizeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.SynthesizeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAudio_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getGenerationTime();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getAudioLength();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ondewo.t2s.RequestConfig.serializeBinaryToWriter
    );
  }
  f = message.getNormalizedText();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string audio_uuid = 1;
 * @return {string}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.getAudioUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.SynthesizeResponse} returns this
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.setAudioUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes audio = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.getAudio = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes audio = 2;
 * This is a type-conversion wrapper around `getAudio()`
 * @return {string}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.getAudio_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudio()));
};


/**
 * optional bytes audio = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudio()`
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.getAudio_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudio()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.t2s.SynthesizeResponse} returns this
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.setAudio = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional float generation_time = 3;
 * @return {number}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.getGenerationTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.SynthesizeResponse} returns this
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.setGenerationTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float audio_length = 4;
 * @return {number}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.getAudioLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.SynthesizeResponse} returns this
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.setAudioLength = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string text = 5;
 * @return {string}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.SynthesizeResponse} returns this
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional RequestConfig config = 6;
 * @return {?proto.ondewo.t2s.RequestConfig}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.getConfig = function() {
  return /** @type{?proto.ondewo.t2s.RequestConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.RequestConfig, 6));
};


/**
 * @param {?proto.ondewo.t2s.RequestConfig|undefined} value
 * @return {!proto.ondewo.t2s.SynthesizeResponse} returns this
*/
proto.ondewo.t2s.SynthesizeResponse.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.SynthesizeResponse} returns this
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string normalized_text = 7;
 * @return {string}
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.getNormalizedText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.SynthesizeResponse} returns this
 */
proto.ondewo.t2s.SynthesizeResponse.prototype.setNormalizedText = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.NormalizeTextRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.NormalizeTextRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.NormalizeTextRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.NormalizeTextRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    t2sPipelineId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.NormalizeTextRequest}
 */
proto.ondewo.t2s.NormalizeTextRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.NormalizeTextRequest;
  return proto.ondewo.t2s.NormalizeTextRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.NormalizeTextRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.NormalizeTextRequest}
 */
proto.ondewo.t2s.NormalizeTextRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setT2sPipelineId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.NormalizeTextRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.NormalizeTextRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.NormalizeTextRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.NormalizeTextRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getT2sPipelineId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string t2s_pipeline_id = 1;
 * @return {string}
 */
proto.ondewo.t2s.NormalizeTextRequest.prototype.getT2sPipelineId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.NormalizeTextRequest} returns this
 */
proto.ondewo.t2s.NormalizeTextRequest.prototype.setT2sPipelineId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.ondewo.t2s.NormalizeTextRequest.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.NormalizeTextRequest} returns this
 */
proto.ondewo.t2s.NormalizeTextRequest.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.NormalizeTextResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.NormalizeTextResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.NormalizeTextResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.NormalizeTextResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    normalizedText: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.NormalizeTextResponse}
 */
proto.ondewo.t2s.NormalizeTextResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.NormalizeTextResponse;
  return proto.ondewo.t2s.NormalizeTextResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.NormalizeTextResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.NormalizeTextResponse}
 */
proto.ondewo.t2s.NormalizeTextResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNormalizedText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.NormalizeTextResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.NormalizeTextResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.NormalizeTextResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.NormalizeTextResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNormalizedText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string normalized_text = 1;
 * @return {string}
 */
proto.ondewo.t2s.NormalizeTextResponse.prototype.getNormalizedText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.NormalizeTextResponse} returns this
 */
proto.ondewo.t2s.NormalizeTextResponse.prototype.setNormalizedText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2SGetServiceInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2SGetServiceInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2SGetServiceInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2SGetServiceInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2SGetServiceInfoResponse}
 */
proto.ondewo.t2s.T2SGetServiceInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2SGetServiceInfoResponse;
  return proto.ondewo.t2s.T2SGetServiceInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2SGetServiceInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2SGetServiceInfoResponse}
 */
proto.ondewo.t2s.T2SGetServiceInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2SGetServiceInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2SGetServiceInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2SGetServiceInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2SGetServiceInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.ondewo.t2s.T2SGetServiceInfoResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SGetServiceInfoResponse} returns this
 */
proto.ondewo.t2s.T2SGetServiceInfoResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.repeatedFields_ = [1,2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.ListT2sPipelinesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.ListT2sPipelinesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    languagesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    speakerSexesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    pipelineOwnersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    speakerNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    domainsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest}
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.ListT2sPipelinesRequest;
  return proto.ondewo.t2s.ListT2sPipelinesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.ListT2sPipelinesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest}
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguages(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpeakerSexes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPipelineOwners(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpeakerNames(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addDomains(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.ListT2sPipelinesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.ListT2sPipelinesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getSpeakerSexesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getPipelineOwnersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSpeakerNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * repeated string languages = 1;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.getLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.setLanguagesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.addLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.clearLanguagesList = function() {
  return this.setLanguagesList([]);
};


/**
 * repeated string speaker_sexes = 2;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.getSpeakerSexesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.setSpeakerSexesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.addSpeakerSexes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.clearSpeakerSexesList = function() {
  return this.setSpeakerSexesList([]);
};


/**
 * repeated string pipeline_owners = 3;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.getPipelineOwnersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.setPipelineOwnersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.addPipelineOwners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.clearPipelineOwnersList = function() {
  return this.setPipelineOwnersList([]);
};


/**
 * repeated string speaker_names = 4;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.getSpeakerNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.setSpeakerNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.addSpeakerNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.clearSpeakerNamesList = function() {
  return this.setSpeakerNamesList([]);
};


/**
 * repeated string domains = 5;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.getDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.setDomainsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.addDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sPipelinesRequest} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesRequest.prototype.clearDomainsList = function() {
  return this.setDomainsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.ListT2sPipelinesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.ListT2sPipelinesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.ListT2sPipelinesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.ListT2sPipelinesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sPipelinesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pipelinesList: jspb.Message.toObjectList(msg.getPipelinesList(),
    proto.ondewo.t2s.Text2SpeechConfig.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.ListT2sPipelinesResponse}
 */
proto.ondewo.t2s.ListT2sPipelinesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.ListT2sPipelinesResponse;
  return proto.ondewo.t2s.ListT2sPipelinesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.ListT2sPipelinesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.ListT2sPipelinesResponse}
 */
proto.ondewo.t2s.ListT2sPipelinesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.t2s.Text2SpeechConfig;
      reader.readMessage(value,proto.ondewo.t2s.Text2SpeechConfig.deserializeBinaryFromReader);
      msg.addPipelines(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.ListT2sPipelinesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.ListT2sPipelinesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.ListT2sPipelinesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sPipelinesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPipelinesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.t2s.Text2SpeechConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Text2SpeechConfig pipelines = 1;
 * @return {!Array<!proto.ondewo.t2s.Text2SpeechConfig>}
 */
proto.ondewo.t2s.ListT2sPipelinesResponse.prototype.getPipelinesList = function() {
  return /** @type{!Array<!proto.ondewo.t2s.Text2SpeechConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.t2s.Text2SpeechConfig, 1));
};


/**
 * @param {!Array<!proto.ondewo.t2s.Text2SpeechConfig>} value
 * @return {!proto.ondewo.t2s.ListT2sPipelinesResponse} returns this
*/
proto.ondewo.t2s.ListT2sPipelinesResponse.prototype.setPipelinesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.t2s.Text2SpeechConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.Text2SpeechConfig}
 */
proto.ondewo.t2s.ListT2sPipelinesResponse.prototype.addPipelines = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.t2s.Text2SpeechConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sPipelinesResponse} returns this
 */
proto.ondewo.t2s.ListT2sPipelinesResponse.prototype.clearPipelinesList = function() {
  return this.setPipelinesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.ListT2sLanguagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.ListT2sLanguagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    speakerSexesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    pipelineOwnersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    speakerNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    domainsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest}
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.ListT2sLanguagesRequest;
  return proto.ondewo.t2s.ListT2sLanguagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.ListT2sLanguagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest}
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpeakerSexes(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPipelineOwners(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpeakerNames(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDomains(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.ListT2sLanguagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.ListT2sLanguagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeakerSexesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPipelineOwnersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSpeakerNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated string speaker_sexes = 1;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.getSpeakerSexesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.setSpeakerSexesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.addSpeakerSexes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.clearSpeakerSexesList = function() {
  return this.setSpeakerSexesList([]);
};


/**
 * repeated string pipeline_owners = 2;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.getPipelineOwnersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.setPipelineOwnersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.addPipelineOwners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.clearPipelineOwnersList = function() {
  return this.setPipelineOwnersList([]);
};


/**
 * repeated string speaker_names = 3;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.getSpeakerNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.setSpeakerNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.addSpeakerNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.clearSpeakerNamesList = function() {
  return this.setSpeakerNamesList([]);
};


/**
 * repeated string domains = 4;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.getDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.setDomainsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.addDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sLanguagesRequest} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesRequest.prototype.clearDomainsList = function() {
  return this.setDomainsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.ListT2sLanguagesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.ListT2sLanguagesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    languagesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.ListT2sLanguagesResponse}
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.ListT2sLanguagesResponse;
  return proto.ondewo.t2s.ListT2sLanguagesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.ListT2sLanguagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.ListT2sLanguagesResponse}
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.ListT2sLanguagesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.ListT2sLanguagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string languages = 1;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.prototype.getLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sLanguagesResponse} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.prototype.setLanguagesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sLanguagesResponse} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.prototype.addLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sLanguagesResponse} returns this
 */
proto.ondewo.t2s.ListT2sLanguagesResponse.prototype.clearLanguagesList = function() {
  return this.setLanguagesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.ListT2sDomainsRequest.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.ListT2sDomainsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.ListT2sDomainsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sDomainsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    speakerSexesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    pipelineOwnersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    speakerNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    languagesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest}
 */
proto.ondewo.t2s.ListT2sDomainsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.ListT2sDomainsRequest;
  return proto.ondewo.t2s.ListT2sDomainsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.ListT2sDomainsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest}
 */
proto.ondewo.t2s.ListT2sDomainsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpeakerSexes(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPipelineOwners(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpeakerNames(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.ListT2sDomainsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.ListT2sDomainsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sDomainsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeakerSexesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPipelineOwnersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSpeakerNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated string speaker_sexes = 1;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.getSpeakerSexesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.setSpeakerSexesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.addSpeakerSexes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.clearSpeakerSexesList = function() {
  return this.setSpeakerSexesList([]);
};


/**
 * repeated string pipeline_owners = 2;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.getPipelineOwnersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.setPipelineOwnersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.addPipelineOwners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.clearPipelineOwnersList = function() {
  return this.setPipelineOwnersList([]);
};


/**
 * repeated string speaker_names = 3;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.getSpeakerNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.setSpeakerNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.addSpeakerNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.clearSpeakerNamesList = function() {
  return this.setSpeakerNamesList([]);
};


/**
 * repeated string languages = 4;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.getLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.setLanguagesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.addLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sDomainsRequest} returns this
 */
proto.ondewo.t2s.ListT2sDomainsRequest.prototype.clearLanguagesList = function() {
  return this.setLanguagesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.ListT2sDomainsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.ListT2sDomainsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.ListT2sDomainsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.ListT2sDomainsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sDomainsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    domainsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.ListT2sDomainsResponse}
 */
proto.ondewo.t2s.ListT2sDomainsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.ListT2sDomainsResponse;
  return proto.ondewo.t2s.ListT2sDomainsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.ListT2sDomainsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.ListT2sDomainsResponse}
 */
proto.ondewo.t2s.ListT2sDomainsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDomains(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.ListT2sDomainsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.ListT2sDomainsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.ListT2sDomainsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListT2sDomainsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string domains = 1;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListT2sDomainsResponse.prototype.getDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListT2sDomainsResponse} returns this
 */
proto.ondewo.t2s.ListT2sDomainsResponse.prototype.setDomainsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListT2sDomainsResponse} returns this
 */
proto.ondewo.t2s.ListT2sDomainsResponse.prototype.addDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListT2sDomainsResponse} returns this
 */
proto.ondewo.t2s.ListT2sDomainsResponse.prototype.clearDomainsList = function() {
  return this.setDomainsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2sPipelineId.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2sPipelineId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2sPipelineId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sPipelineId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2sPipelineId}
 */
proto.ondewo.t2s.T2sPipelineId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2sPipelineId;
  return proto.ondewo.t2s.T2sPipelineId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2sPipelineId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2sPipelineId}
 */
proto.ondewo.t2s.T2sPipelineId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2sPipelineId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2sPipelineId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2sPipelineId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sPipelineId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ondewo.t2s.T2sPipelineId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2sPipelineId} returns this
 */
proto.ondewo.t2s.T2sPipelineId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Text2SpeechConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Text2SpeechConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Text2SpeechConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: (f = msg.getDescription()) && proto.ondewo.t2s.T2SDescription.toObject(includeInstance, f),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    inference: (f = msg.getInference()) && proto.ondewo.t2s.T2SInference.toObject(includeInstance, f),
    normalization: (f = msg.getNormalization()) && proto.ondewo.t2s.T2SNormalization.toObject(includeInstance, f),
    postprocessing: (f = msg.getPostprocessing()) && proto.ondewo.t2s.Postprocessing.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Text2SpeechConfig}
 */
proto.ondewo.t2s.Text2SpeechConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Text2SpeechConfig;
  return proto.ondewo.t2s.Text2SpeechConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Text2SpeechConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Text2SpeechConfig}
 */
proto.ondewo.t2s.Text2SpeechConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.ondewo.t2s.T2SDescription;
      reader.readMessage(value,proto.ondewo.t2s.T2SDescription.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 4:
      var value = new proto.ondewo.t2s.T2SInference;
      reader.readMessage(value,proto.ondewo.t2s.T2SInference.deserializeBinaryFromReader);
      msg.setInference(value);
      break;
    case 5:
      var value = new proto.ondewo.t2s.T2SNormalization;
      reader.readMessage(value,proto.ondewo.t2s.T2SNormalization.deserializeBinaryFromReader);
      msg.setNormalization(value);
      break;
    case 6:
      var value = new proto.ondewo.t2s.Postprocessing;
      reader.readMessage(value,proto.ondewo.t2s.Postprocessing.deserializeBinaryFromReader);
      msg.setPostprocessing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Text2SpeechConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Text2SpeechConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Text2SpeechConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.t2s.T2SDescription.serializeBinaryToWriter
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getInference();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.t2s.T2SInference.serializeBinaryToWriter
    );
  }
  f = message.getNormalization();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ondewo.t2s.T2SNormalization.serializeBinaryToWriter
    );
  }
  f = message.getPostprocessing();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ondewo.t2s.Postprocessing.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.Text2SpeechConfig} returns this
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional T2SDescription description = 2;
 * @return {?proto.ondewo.t2s.T2SDescription}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.getDescription = function() {
  return /** @type{?proto.ondewo.t2s.T2SDescription} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2SDescription, 2));
};


/**
 * @param {?proto.ondewo.t2s.T2SDescription|undefined} value
 * @return {!proto.ondewo.t2s.Text2SpeechConfig} returns this
*/
proto.ondewo.t2s.Text2SpeechConfig.prototype.setDescription = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2SpeechConfig} returns this
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.clearDescription = function() {
  return this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool active = 3;
 * @return {boolean}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.Text2SpeechConfig} returns this
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional T2SInference inference = 4;
 * @return {?proto.ondewo.t2s.T2SInference}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.getInference = function() {
  return /** @type{?proto.ondewo.t2s.T2SInference} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2SInference, 4));
};


/**
 * @param {?proto.ondewo.t2s.T2SInference|undefined} value
 * @return {!proto.ondewo.t2s.Text2SpeechConfig} returns this
*/
proto.ondewo.t2s.Text2SpeechConfig.prototype.setInference = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2SpeechConfig} returns this
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.clearInference = function() {
  return this.setInference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.hasInference = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional T2SNormalization normalization = 5;
 * @return {?proto.ondewo.t2s.T2SNormalization}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.getNormalization = function() {
  return /** @type{?proto.ondewo.t2s.T2SNormalization} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2SNormalization, 5));
};


/**
 * @param {?proto.ondewo.t2s.T2SNormalization|undefined} value
 * @return {!proto.ondewo.t2s.Text2SpeechConfig} returns this
*/
proto.ondewo.t2s.Text2SpeechConfig.prototype.setNormalization = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2SpeechConfig} returns this
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.clearNormalization = function() {
  return this.setNormalization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.hasNormalization = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Postprocessing postprocessing = 6;
 * @return {?proto.ondewo.t2s.Postprocessing}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.getPostprocessing = function() {
  return /** @type{?proto.ondewo.t2s.Postprocessing} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.Postprocessing, 6));
};


/**
 * @param {?proto.ondewo.t2s.Postprocessing|undefined} value
 * @return {!proto.ondewo.t2s.Text2SpeechConfig} returns this
*/
proto.ondewo.t2s.Text2SpeechConfig.prototype.setPostprocessing = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2SpeechConfig} returns this
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.clearPostprocessing = function() {
  return this.setPostprocessing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2SpeechConfig.prototype.hasPostprocessing = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2SDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2SDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2SDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2SDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    language: jspb.Message.getFieldWithDefault(msg, 1, ""),
    speakerSex: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pipelineOwner: jspb.Message.getFieldWithDefault(msg, 3, ""),
    comments: jspb.Message.getFieldWithDefault(msg, 4, ""),
    speakerName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    domain: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2SDescription}
 */
proto.ondewo.t2s.T2SDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2SDescription;
  return proto.ondewo.t2s.T2SDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2SDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2SDescription}
 */
proto.ondewo.t2s.T2SDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpeakerSex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipelineOwner(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setComments(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpeakerName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2SDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2SDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2SDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2SDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpeakerSex();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPipelineOwner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getComments();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSpeakerName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string language = 1;
 * @return {string}
 */
proto.ondewo.t2s.T2SDescription.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SDescription} returns this
 */
proto.ondewo.t2s.T2SDescription.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string speaker_sex = 2;
 * @return {string}
 */
proto.ondewo.t2s.T2SDescription.prototype.getSpeakerSex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SDescription} returns this
 */
proto.ondewo.t2s.T2SDescription.prototype.setSpeakerSex = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string pipeline_owner = 3;
 * @return {string}
 */
proto.ondewo.t2s.T2SDescription.prototype.getPipelineOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SDescription} returns this
 */
proto.ondewo.t2s.T2SDescription.prototype.setPipelineOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string comments = 4;
 * @return {string}
 */
proto.ondewo.t2s.T2SDescription.prototype.getComments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SDescription} returns this
 */
proto.ondewo.t2s.T2SDescription.prototype.setComments = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string speaker_name = 5;
 * @return {string}
 */
proto.ondewo.t2s.T2SDescription.prototype.getSpeakerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SDescription} returns this
 */
proto.ondewo.t2s.T2SDescription.prototype.setSpeakerName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string domain = 6;
 * @return {string}
 */
proto.ondewo.t2s.T2SDescription.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SDescription} returns this
 */
proto.ondewo.t2s.T2SDescription.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2SInference.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2SInference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2SInference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2SInference.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    compositeInference: (f = msg.getCompositeInference()) && proto.ondewo.t2s.CompositeInference.toObject(includeInstance, f),
    singleInference: (f = msg.getSingleInference()) && proto.ondewo.t2s.SingleInference.toObject(includeInstance, f),
    caching: (f = msg.getCaching()) && proto.ondewo.t2s.Caching.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2SInference}
 */
proto.ondewo.t2s.T2SInference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2SInference;
  return proto.ondewo.t2s.T2SInference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2SInference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2SInference}
 */
proto.ondewo.t2s.T2SInference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.ondewo.t2s.CompositeInference;
      reader.readMessage(value,proto.ondewo.t2s.CompositeInference.deserializeBinaryFromReader);
      msg.setCompositeInference(value);
      break;
    case 3:
      var value = new proto.ondewo.t2s.SingleInference;
      reader.readMessage(value,proto.ondewo.t2s.SingleInference.deserializeBinaryFromReader);
      msg.setSingleInference(value);
      break;
    case 4:
      var value = new proto.ondewo.t2s.Caching;
      reader.readMessage(value,proto.ondewo.t2s.Caching.deserializeBinaryFromReader);
      msg.setCaching(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2SInference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2SInference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2SInference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2SInference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompositeInference();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.t2s.CompositeInference.serializeBinaryToWriter
    );
  }
  f = message.getSingleInference();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.t2s.SingleInference.serializeBinaryToWriter
    );
  }
  f = message.getCaching();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.t2s.Caching.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.ondewo.t2s.T2SInference.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SInference} returns this
 */
proto.ondewo.t2s.T2SInference.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CompositeInference composite_inference = 2;
 * @return {?proto.ondewo.t2s.CompositeInference}
 */
proto.ondewo.t2s.T2SInference.prototype.getCompositeInference = function() {
  return /** @type{?proto.ondewo.t2s.CompositeInference} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.CompositeInference, 2));
};


/**
 * @param {?proto.ondewo.t2s.CompositeInference|undefined} value
 * @return {!proto.ondewo.t2s.T2SInference} returns this
*/
proto.ondewo.t2s.T2SInference.prototype.setCompositeInference = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.T2SInference} returns this
 */
proto.ondewo.t2s.T2SInference.prototype.clearCompositeInference = function() {
  return this.setCompositeInference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.T2SInference.prototype.hasCompositeInference = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SingleInference single_inference = 3;
 * @return {?proto.ondewo.t2s.SingleInference}
 */
proto.ondewo.t2s.T2SInference.prototype.getSingleInference = function() {
  return /** @type{?proto.ondewo.t2s.SingleInference} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.SingleInference, 3));
};


/**
 * @param {?proto.ondewo.t2s.SingleInference|undefined} value
 * @return {!proto.ondewo.t2s.T2SInference} returns this
*/
proto.ondewo.t2s.T2SInference.prototype.setSingleInference = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.T2SInference} returns this
 */
proto.ondewo.t2s.T2SInference.prototype.clearSingleInference = function() {
  return this.setSingleInference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.T2SInference.prototype.hasSingleInference = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Caching caching = 4;
 * @return {?proto.ondewo.t2s.Caching}
 */
proto.ondewo.t2s.T2SInference.prototype.getCaching = function() {
  return /** @type{?proto.ondewo.t2s.Caching} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.Caching, 4));
};


/**
 * @param {?proto.ondewo.t2s.Caching|undefined} value
 * @return {!proto.ondewo.t2s.T2SInference} returns this
*/
proto.ondewo.t2s.T2SInference.prototype.setCaching = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.T2SInference} returns this
 */
proto.ondewo.t2s.T2SInference.prototype.clearCaching = function() {
  return this.setCaching(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.T2SInference.prototype.hasCaching = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.CompositeInference.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.CompositeInference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.CompositeInference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.CompositeInference.toObject = function(includeInstance, msg) {
  var f, obj = {
    text2mel: (f = msg.getText2mel()) && proto.ondewo.t2s.Text2Mel.toObject(includeInstance, f),
    mel2audio: (f = msg.getMel2audio()) && proto.ondewo.t2s.Mel2Audio.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.CompositeInference}
 */
proto.ondewo.t2s.CompositeInference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.CompositeInference;
  return proto.ondewo.t2s.CompositeInference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.CompositeInference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.CompositeInference}
 */
proto.ondewo.t2s.CompositeInference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.t2s.Text2Mel;
      reader.readMessage(value,proto.ondewo.t2s.Text2Mel.deserializeBinaryFromReader);
      msg.setText2mel(value);
      break;
    case 2:
      var value = new proto.ondewo.t2s.Mel2Audio;
      reader.readMessage(value,proto.ondewo.t2s.Mel2Audio.deserializeBinaryFromReader);
      msg.setMel2audio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.CompositeInference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.CompositeInference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.CompositeInference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.CompositeInference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText2mel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.t2s.Text2Mel.serializeBinaryToWriter
    );
  }
  f = message.getMel2audio();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.t2s.Mel2Audio.serializeBinaryToWriter
    );
  }
};


/**
 * optional Text2Mel text2mel = 1;
 * @return {?proto.ondewo.t2s.Text2Mel}
 */
proto.ondewo.t2s.CompositeInference.prototype.getText2mel = function() {
  return /** @type{?proto.ondewo.t2s.Text2Mel} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.Text2Mel, 1));
};


/**
 * @param {?proto.ondewo.t2s.Text2Mel|undefined} value
 * @return {!proto.ondewo.t2s.CompositeInference} returns this
*/
proto.ondewo.t2s.CompositeInference.prototype.setText2mel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.CompositeInference} returns this
 */
proto.ondewo.t2s.CompositeInference.prototype.clearText2mel = function() {
  return this.setText2mel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.CompositeInference.prototype.hasText2mel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Mel2Audio mel2audio = 2;
 * @return {?proto.ondewo.t2s.Mel2Audio}
 */
proto.ondewo.t2s.CompositeInference.prototype.getMel2audio = function() {
  return /** @type{?proto.ondewo.t2s.Mel2Audio} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.Mel2Audio, 2));
};


/**
 * @param {?proto.ondewo.t2s.Mel2Audio|undefined} value
 * @return {!proto.ondewo.t2s.CompositeInference} returns this
*/
proto.ondewo.t2s.CompositeInference.prototype.setMel2audio = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.CompositeInference} returns this
 */
proto.ondewo.t2s.CompositeInference.prototype.clearMel2audio = function() {
  return this.setMel2audio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.CompositeInference.prototype.hasMel2audio = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.SingleInference.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.SingleInference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.SingleInference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.SingleInference.toObject = function(includeInstance, msg) {
  var f, obj = {
    text2audio: (f = msg.getText2audio()) && proto.ondewo.t2s.Text2Audio.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.SingleInference}
 */
proto.ondewo.t2s.SingleInference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.SingleInference;
  return proto.ondewo.t2s.SingleInference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.SingleInference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.SingleInference}
 */
proto.ondewo.t2s.SingleInference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.t2s.Text2Audio;
      reader.readMessage(value,proto.ondewo.t2s.Text2Audio.deserializeBinaryFromReader);
      msg.setText2audio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.SingleInference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.SingleInference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.SingleInference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.SingleInference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText2audio();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.t2s.Text2Audio.serializeBinaryToWriter
    );
  }
};


/**
 * optional Text2Audio text2audio = 1;
 * @return {?proto.ondewo.t2s.Text2Audio}
 */
proto.ondewo.t2s.SingleInference.prototype.getText2audio = function() {
  return /** @type{?proto.ondewo.t2s.Text2Audio} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.Text2Audio, 1));
};


/**
 * @param {?proto.ondewo.t2s.Text2Audio|undefined} value
 * @return {!proto.ondewo.t2s.SingleInference} returns this
*/
proto.ondewo.t2s.SingleInference.prototype.setText2audio = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.SingleInference} returns this
 */
proto.ondewo.t2s.SingleInference.prototype.clearText2audio = function() {
  return this.setText2audio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.SingleInference.prototype.hasText2audio = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Text2Mel.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Text2Mel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Text2Mel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Text2Mel.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    glowTts: (f = msg.getGlowTts()) && proto.ondewo.t2s.GlowTTS.toObject(includeInstance, f),
    glowTtsTriton: (f = msg.getGlowTtsTriton()) && proto.ondewo.t2s.GlowTTSTriton.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Text2Mel}
 */
proto.ondewo.t2s.Text2Mel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Text2Mel;
  return proto.ondewo.t2s.Text2Mel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Text2Mel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Text2Mel}
 */
proto.ondewo.t2s.Text2Mel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.ondewo.t2s.GlowTTS;
      reader.readMessage(value,proto.ondewo.t2s.GlowTTS.deserializeBinaryFromReader);
      msg.setGlowTts(value);
      break;
    case 3:
      var value = new proto.ondewo.t2s.GlowTTSTriton;
      reader.readMessage(value,proto.ondewo.t2s.GlowTTSTriton.deserializeBinaryFromReader);
      msg.setGlowTtsTriton(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Text2Mel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Text2Mel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Text2Mel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Text2Mel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGlowTts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.t2s.GlowTTS.serializeBinaryToWriter
    );
  }
  f = message.getGlowTtsTriton();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.t2s.GlowTTSTriton.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.ondewo.t2s.Text2Mel.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.Text2Mel} returns this
 */
proto.ondewo.t2s.Text2Mel.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional GlowTTS glow_tts = 2;
 * @return {?proto.ondewo.t2s.GlowTTS}
 */
proto.ondewo.t2s.Text2Mel.prototype.getGlowTts = function() {
  return /** @type{?proto.ondewo.t2s.GlowTTS} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.GlowTTS, 2));
};


/**
 * @param {?proto.ondewo.t2s.GlowTTS|undefined} value
 * @return {!proto.ondewo.t2s.Text2Mel} returns this
*/
proto.ondewo.t2s.Text2Mel.prototype.setGlowTts = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2Mel} returns this
 */
proto.ondewo.t2s.Text2Mel.prototype.clearGlowTts = function() {
  return this.setGlowTts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2Mel.prototype.hasGlowTts = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GlowTTSTriton glow_tts_triton = 3;
 * @return {?proto.ondewo.t2s.GlowTTSTriton}
 */
proto.ondewo.t2s.Text2Mel.prototype.getGlowTtsTriton = function() {
  return /** @type{?proto.ondewo.t2s.GlowTTSTriton} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.GlowTTSTriton, 3));
};


/**
 * @param {?proto.ondewo.t2s.GlowTTSTriton|undefined} value
 * @return {!proto.ondewo.t2s.Text2Mel} returns this
*/
proto.ondewo.t2s.Text2Mel.prototype.setGlowTtsTriton = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2Mel} returns this
 */
proto.ondewo.t2s.Text2Mel.prototype.clearGlowTtsTriton = function() {
  return this.setGlowTtsTriton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2Mel.prototype.hasGlowTtsTriton = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Text2Audio.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Text2Audio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Text2Audio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Text2Audio.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    vits: (f = msg.getVits()) && proto.ondewo.t2s.Vits.toObject(includeInstance, f),
    vitsTriton: (f = msg.getVitsTriton()) && proto.ondewo.t2s.VitsTriton.toObject(includeInstance, f),
    t2sCloudServiceElevenlabs: (f = msg.getT2sCloudServiceElevenlabs()) && proto.ondewo.t2s.T2sCloudServiceElevenLabs.toObject(includeInstance, f),
    t2sCloudServiceAmazon: (f = msg.getT2sCloudServiceAmazon()) && proto.ondewo.t2s.T2sCloudServiceAmazon.toObject(includeInstance, f),
    t2sCloudServiceGoogle: (f = msg.getT2sCloudServiceGoogle()) && proto.ondewo.t2s.T2sCloudServiceGoogle.toObject(includeInstance, f),
    t2sCloudServiceMicrosoft: (f = msg.getT2sCloudServiceMicrosoft()) && proto.ondewo.t2s.T2sCloudServiceMicrosoft.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Text2Audio}
 */
proto.ondewo.t2s.Text2Audio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Text2Audio;
  return proto.ondewo.t2s.Text2Audio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Text2Audio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Text2Audio}
 */
proto.ondewo.t2s.Text2Audio.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.ondewo.t2s.Vits;
      reader.readMessage(value,proto.ondewo.t2s.Vits.deserializeBinaryFromReader);
      msg.setVits(value);
      break;
    case 3:
      var value = new proto.ondewo.t2s.VitsTriton;
      reader.readMessage(value,proto.ondewo.t2s.VitsTriton.deserializeBinaryFromReader);
      msg.setVitsTriton(value);
      break;
    case 4:
      var value = new proto.ondewo.t2s.T2sCloudServiceElevenLabs;
      reader.readMessage(value,proto.ondewo.t2s.T2sCloudServiceElevenLabs.deserializeBinaryFromReader);
      msg.setT2sCloudServiceElevenlabs(value);
      break;
    case 5:
      var value = new proto.ondewo.t2s.T2sCloudServiceAmazon;
      reader.readMessage(value,proto.ondewo.t2s.T2sCloudServiceAmazon.deserializeBinaryFromReader);
      msg.setT2sCloudServiceAmazon(value);
      break;
    case 6:
      var value = new proto.ondewo.t2s.T2sCloudServiceGoogle;
      reader.readMessage(value,proto.ondewo.t2s.T2sCloudServiceGoogle.deserializeBinaryFromReader);
      msg.setT2sCloudServiceGoogle(value);
      break;
    case 7:
      var value = new proto.ondewo.t2s.T2sCloudServiceMicrosoft;
      reader.readMessage(value,proto.ondewo.t2s.T2sCloudServiceMicrosoft.deserializeBinaryFromReader);
      msg.setT2sCloudServiceMicrosoft(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Text2Audio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Text2Audio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Text2Audio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Text2Audio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVits();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.t2s.Vits.serializeBinaryToWriter
    );
  }
  f = message.getVitsTriton();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.t2s.VitsTriton.serializeBinaryToWriter
    );
  }
  f = message.getT2sCloudServiceElevenlabs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.t2s.T2sCloudServiceElevenLabs.serializeBinaryToWriter
    );
  }
  f = message.getT2sCloudServiceAmazon();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ondewo.t2s.T2sCloudServiceAmazon.serializeBinaryToWriter
    );
  }
  f = message.getT2sCloudServiceGoogle();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ondewo.t2s.T2sCloudServiceGoogle.serializeBinaryToWriter
    );
  }
  f = message.getT2sCloudServiceMicrosoft();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ondewo.t2s.T2sCloudServiceMicrosoft.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.ondewo.t2s.Text2Audio.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
 */
proto.ondewo.t2s.Text2Audio.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Vits vits = 2;
 * @return {?proto.ondewo.t2s.Vits}
 */
proto.ondewo.t2s.Text2Audio.prototype.getVits = function() {
  return /** @type{?proto.ondewo.t2s.Vits} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.Vits, 2));
};


/**
 * @param {?proto.ondewo.t2s.Vits|undefined} value
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
*/
proto.ondewo.t2s.Text2Audio.prototype.setVits = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
 */
proto.ondewo.t2s.Text2Audio.prototype.clearVits = function() {
  return this.setVits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2Audio.prototype.hasVits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VitsTriton vits_triton = 3;
 * @return {?proto.ondewo.t2s.VitsTriton}
 */
proto.ondewo.t2s.Text2Audio.prototype.getVitsTriton = function() {
  return /** @type{?proto.ondewo.t2s.VitsTriton} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.VitsTriton, 3));
};


/**
 * @param {?proto.ondewo.t2s.VitsTriton|undefined} value
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
*/
proto.ondewo.t2s.Text2Audio.prototype.setVitsTriton = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
 */
proto.ondewo.t2s.Text2Audio.prototype.clearVitsTriton = function() {
  return this.setVitsTriton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2Audio.prototype.hasVitsTriton = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional T2sCloudServiceElevenLabs t2s_cloud_service_elevenlabs = 4;
 * @return {?proto.ondewo.t2s.T2sCloudServiceElevenLabs}
 */
proto.ondewo.t2s.Text2Audio.prototype.getT2sCloudServiceElevenlabs = function() {
  return /** @type{?proto.ondewo.t2s.T2sCloudServiceElevenLabs} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2sCloudServiceElevenLabs, 4));
};


/**
 * @param {?proto.ondewo.t2s.T2sCloudServiceElevenLabs|undefined} value
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
*/
proto.ondewo.t2s.Text2Audio.prototype.setT2sCloudServiceElevenlabs = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
 */
proto.ondewo.t2s.Text2Audio.prototype.clearT2sCloudServiceElevenlabs = function() {
  return this.setT2sCloudServiceElevenlabs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2Audio.prototype.hasT2sCloudServiceElevenlabs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional T2sCloudServiceAmazon t2s_cloud_service_amazon = 5;
 * @return {?proto.ondewo.t2s.T2sCloudServiceAmazon}
 */
proto.ondewo.t2s.Text2Audio.prototype.getT2sCloudServiceAmazon = function() {
  return /** @type{?proto.ondewo.t2s.T2sCloudServiceAmazon} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2sCloudServiceAmazon, 5));
};


/**
 * @param {?proto.ondewo.t2s.T2sCloudServiceAmazon|undefined} value
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
*/
proto.ondewo.t2s.Text2Audio.prototype.setT2sCloudServiceAmazon = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
 */
proto.ondewo.t2s.Text2Audio.prototype.clearT2sCloudServiceAmazon = function() {
  return this.setT2sCloudServiceAmazon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2Audio.prototype.hasT2sCloudServiceAmazon = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional T2sCloudServiceGoogle t2s_cloud_service_google = 6;
 * @return {?proto.ondewo.t2s.T2sCloudServiceGoogle}
 */
proto.ondewo.t2s.Text2Audio.prototype.getT2sCloudServiceGoogle = function() {
  return /** @type{?proto.ondewo.t2s.T2sCloudServiceGoogle} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2sCloudServiceGoogle, 6));
};


/**
 * @param {?proto.ondewo.t2s.T2sCloudServiceGoogle|undefined} value
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
*/
proto.ondewo.t2s.Text2Audio.prototype.setT2sCloudServiceGoogle = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
 */
proto.ondewo.t2s.Text2Audio.prototype.clearT2sCloudServiceGoogle = function() {
  return this.setT2sCloudServiceGoogle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2Audio.prototype.hasT2sCloudServiceGoogle = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional T2sCloudServiceMicrosoft t2s_cloud_service_microsoft = 7;
 * @return {?proto.ondewo.t2s.T2sCloudServiceMicrosoft}
 */
proto.ondewo.t2s.Text2Audio.prototype.getT2sCloudServiceMicrosoft = function() {
  return /** @type{?proto.ondewo.t2s.T2sCloudServiceMicrosoft} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2sCloudServiceMicrosoft, 7));
};


/**
 * @param {?proto.ondewo.t2s.T2sCloudServiceMicrosoft|undefined} value
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
*/
proto.ondewo.t2s.Text2Audio.prototype.setT2sCloudServiceMicrosoft = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Text2Audio} returns this
 */
proto.ondewo.t2s.Text2Audio.prototype.clearT2sCloudServiceMicrosoft = function() {
  return this.setT2sCloudServiceMicrosoft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Text2Audio.prototype.hasT2sCloudServiceMicrosoft = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.GlowTTS.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.GlowTTS.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.GlowTTS.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.GlowTTS} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.GlowTTS.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    useGpu: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    lengthScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    noiseScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    path: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cleanersList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    paramConfigPath: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.GlowTTS}
 */
proto.ondewo.t2s.GlowTTS.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.GlowTTS;
  return proto.ondewo.t2s.GlowTTS.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.GlowTTS} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.GlowTTS}
 */
proto.ondewo.t2s.GlowTTS.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBatchSize(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseGpu(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLengthScale(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setNoiseScale(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addCleaners(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setParamConfigPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.GlowTTS.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.GlowTTS.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.GlowTTS} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.GlowTTS.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUseGpu();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLengthScale();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getNoiseScale();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCleanersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getParamConfigPath();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 batch_size = 1;
 * @return {number}
 */
proto.ondewo.t2s.GlowTTS.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.GlowTTS} returns this
 */
proto.ondewo.t2s.GlowTTS.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool use_gpu = 2;
 * @return {boolean}
 */
proto.ondewo.t2s.GlowTTS.prototype.getUseGpu = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.GlowTTS} returns this
 */
proto.ondewo.t2s.GlowTTS.prototype.setUseGpu = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional float length_scale = 3;
 * @return {number}
 */
proto.ondewo.t2s.GlowTTS.prototype.getLengthScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.GlowTTS} returns this
 */
proto.ondewo.t2s.GlowTTS.prototype.setLengthScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float noise_scale = 4;
 * @return {number}
 */
proto.ondewo.t2s.GlowTTS.prototype.getNoiseScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.GlowTTS} returns this
 */
proto.ondewo.t2s.GlowTTS.prototype.setNoiseScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string path = 5;
 * @return {string}
 */
proto.ondewo.t2s.GlowTTS.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.GlowTTS} returns this
 */
proto.ondewo.t2s.GlowTTS.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string cleaners = 6;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.GlowTTS.prototype.getCleanersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.GlowTTS} returns this
 */
proto.ondewo.t2s.GlowTTS.prototype.setCleanersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.GlowTTS} returns this
 */
proto.ondewo.t2s.GlowTTS.prototype.addCleaners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.GlowTTS} returns this
 */
proto.ondewo.t2s.GlowTTS.prototype.clearCleanersList = function() {
  return this.setCleanersList([]);
};


/**
 * optional string param_config_path = 7;
 * @return {string}
 */
proto.ondewo.t2s.GlowTTS.prototype.getParamConfigPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.GlowTTS} returns this
 */
proto.ondewo.t2s.GlowTTS.prototype.setParamConfigPath = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.GlowTTSTriton.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.GlowTTSTriton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.GlowTTSTriton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.GlowTTSTriton.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lengthScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    noiseScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    cleanersList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    maxTextLength: jspb.Message.getFieldWithDefault(msg, 5, 0),
    paramConfigPath: jspb.Message.getFieldWithDefault(msg, 6, ""),
    tritonModelName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tritonServerHost: jspb.Message.getFieldWithDefault(msg, 8, ""),
    tritonServerPort: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.GlowTTSTriton}
 */
proto.ondewo.t2s.GlowTTSTriton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.GlowTTSTriton;
  return proto.ondewo.t2s.GlowTTSTriton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.GlowTTSTriton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.GlowTTSTriton}
 */
proto.ondewo.t2s.GlowTTSTriton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBatchSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLengthScale(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setNoiseScale(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCleaners(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxTextLength(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setParamConfigPath(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTritonModelName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTritonServerHost(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTritonServerPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.GlowTTSTriton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.GlowTTSTriton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.GlowTTSTriton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLengthScale();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getNoiseScale();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getCleanersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMaxTextLength();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getParamConfigPath();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTritonModelName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTritonServerHost();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTritonServerPort();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional int64 batch_size = 1;
 * @return {number}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float length_scale = 2;
 * @return {number}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.getLengthScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.setLengthScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float noise_scale = 3;
 * @return {number}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.getNoiseScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.setNoiseScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated string cleaners = 4;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.getCleanersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.setCleanersList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.addCleaners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.clearCleanersList = function() {
  return this.setCleanersList([]);
};


/**
 * optional int64 max_text_length = 5;
 * @return {number}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.getMaxTextLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.setMaxTextLength = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string param_config_path = 6;
 * @return {string}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.getParamConfigPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.setParamConfigPath = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string triton_model_name = 7;
 * @return {string}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.getTritonModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.setTritonModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string triton_server_host = 8;
 * @return {string}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.getTritonServerHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.setTritonServerHost = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 triton_server_port = 9;
 * @return {number}
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.getTritonServerPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.GlowTTSTriton} returns this
 */
proto.ondewo.t2s.GlowTTSTriton.prototype.setTritonServerPort = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.Vits.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Vits.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Vits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Vits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Vits.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    useGpu: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    lengthScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    noiseScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    path: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cleanersList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    paramConfigPath: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Vits}
 */
proto.ondewo.t2s.Vits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Vits;
  return proto.ondewo.t2s.Vits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Vits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Vits}
 */
proto.ondewo.t2s.Vits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBatchSize(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseGpu(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLengthScale(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setNoiseScale(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addCleaners(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setParamConfigPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Vits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Vits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Vits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Vits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUseGpu();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLengthScale();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getNoiseScale();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCleanersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getParamConfigPath();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 batch_size = 1;
 * @return {number}
 */
proto.ondewo.t2s.Vits.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Vits} returns this
 */
proto.ondewo.t2s.Vits.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool use_gpu = 2;
 * @return {boolean}
 */
proto.ondewo.t2s.Vits.prototype.getUseGpu = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.Vits} returns this
 */
proto.ondewo.t2s.Vits.prototype.setUseGpu = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional float length_scale = 3;
 * @return {number}
 */
proto.ondewo.t2s.Vits.prototype.getLengthScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Vits} returns this
 */
proto.ondewo.t2s.Vits.prototype.setLengthScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float noise_scale = 4;
 * @return {number}
 */
proto.ondewo.t2s.Vits.prototype.getNoiseScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Vits} returns this
 */
proto.ondewo.t2s.Vits.prototype.setNoiseScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string path = 5;
 * @return {string}
 */
proto.ondewo.t2s.Vits.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.Vits} returns this
 */
proto.ondewo.t2s.Vits.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string cleaners = 6;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.Vits.prototype.getCleanersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.Vits} returns this
 */
proto.ondewo.t2s.Vits.prototype.setCleanersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.Vits} returns this
 */
proto.ondewo.t2s.Vits.prototype.addCleaners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.Vits} returns this
 */
proto.ondewo.t2s.Vits.prototype.clearCleanersList = function() {
  return this.setCleanersList([]);
};


/**
 * optional string param_config_path = 7;
 * @return {string}
 */
proto.ondewo.t2s.Vits.prototype.getParamConfigPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.Vits} returns this
 */
proto.ondewo.t2s.Vits.prototype.setParamConfigPath = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.VitsTriton.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.VitsTriton.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.VitsTriton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.VitsTriton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.VitsTriton.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lengthScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    noiseScale: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    cleanersList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    maxTextLength: jspb.Message.getFieldWithDefault(msg, 5, 0),
    paramConfigPath: jspb.Message.getFieldWithDefault(msg, 6, ""),
    tritonModelName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tritonServerHost: jspb.Message.getFieldWithDefault(msg, 8, ""),
    tritonServerPort: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.VitsTriton}
 */
proto.ondewo.t2s.VitsTriton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.VitsTriton;
  return proto.ondewo.t2s.VitsTriton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.VitsTriton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.VitsTriton}
 */
proto.ondewo.t2s.VitsTriton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBatchSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLengthScale(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setNoiseScale(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCleaners(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxTextLength(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setParamConfigPath(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTritonModelName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTritonServerHost(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTritonServerPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.VitsTriton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.VitsTriton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.VitsTriton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.VitsTriton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLengthScale();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getNoiseScale();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getCleanersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMaxTextLength();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getParamConfigPath();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTritonModelName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTritonServerHost();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTritonServerPort();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional int64 batch_size = 1;
 * @return {number}
 */
proto.ondewo.t2s.VitsTriton.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float length_scale = 2;
 * @return {number}
 */
proto.ondewo.t2s.VitsTriton.prototype.getLengthScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.setLengthScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float noise_scale = 3;
 * @return {number}
 */
proto.ondewo.t2s.VitsTriton.prototype.getNoiseScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.setNoiseScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated string cleaners = 4;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.VitsTriton.prototype.getCleanersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.setCleanersList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.addCleaners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.clearCleanersList = function() {
  return this.setCleanersList([]);
};


/**
 * optional int64 max_text_length = 5;
 * @return {number}
 */
proto.ondewo.t2s.VitsTriton.prototype.getMaxTextLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.setMaxTextLength = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string param_config_path = 6;
 * @return {string}
 */
proto.ondewo.t2s.VitsTriton.prototype.getParamConfigPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.setParamConfigPath = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string triton_model_name = 7;
 * @return {string}
 */
proto.ondewo.t2s.VitsTriton.prototype.getTritonModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.setTritonModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string triton_server_host = 8;
 * @return {string}
 */
proto.ondewo.t2s.VitsTriton.prototype.getTritonServerHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.setTritonServerHost = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 triton_server_port = 9;
 * @return {number}
 */
proto.ondewo.t2s.VitsTriton.prototype.getTritonServerPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.VitsTriton} returns this
 */
proto.ondewo.t2s.VitsTriton.prototype.setTritonServerPort = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2sCloudServiceElevenLabs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2sCloudServiceElevenLabs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.toObject = function(includeInstance, msg) {
  var f, obj = {
    languageCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    voiceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    voiceSettings: (f = msg.getVoiceSettings()) && proto.ondewo.t2s.VoiceSettings.toObject(includeInstance, f),
    applyTextNormalization: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2sCloudServiceElevenLabs}
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2sCloudServiceElevenLabs;
  return proto.ondewo.t2s.T2sCloudServiceElevenLabs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2sCloudServiceElevenLabs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2sCloudServiceElevenLabs}
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoiceId(value);
      break;
    case 4:
      var value = new proto.ondewo.t2s.VoiceSettings;
      reader.readMessage(value,proto.ondewo.t2s.VoiceSettings.deserializeBinaryFromReader);
      msg.setVoiceSettings(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplyTextNormalization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2sCloudServiceElevenLabs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2sCloudServiceElevenLabs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVoiceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVoiceSettings();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.t2s.VoiceSettings.serializeBinaryToWriter
    );
  }
  f = message.getApplyTextNormalization();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string language_code = 1;
 * @return {string}
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceElevenLabs} returns this
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_id = 2;
 * @return {string}
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.getModelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceElevenLabs} returns this
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.setModelId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string voice_id = 3;
 * @return {string}
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.getVoiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceElevenLabs} returns this
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.setVoiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional VoiceSettings voice_settings = 4;
 * @return {?proto.ondewo.t2s.VoiceSettings}
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.getVoiceSettings = function() {
  return /** @type{?proto.ondewo.t2s.VoiceSettings} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.VoiceSettings, 4));
};


/**
 * @param {?proto.ondewo.t2s.VoiceSettings|undefined} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceElevenLabs} returns this
*/
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.setVoiceSettings = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.T2sCloudServiceElevenLabs} returns this
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.clearVoiceSettings = function() {
  return this.setVoiceSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.hasVoiceSettings = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string apply_text_normalization = 5;
 * @return {string}
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.getApplyTextNormalization = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceElevenLabs} returns this
 */
proto.ondewo.t2s.T2sCloudServiceElevenLabs.prototype.setApplyTextNormalization = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.VoiceSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.VoiceSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.VoiceSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.VoiceSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    stability: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    similarityBoost: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    style: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    useSpeakerBoost: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.VoiceSettings}
 */
proto.ondewo.t2s.VoiceSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.VoiceSettings;
  return proto.ondewo.t2s.VoiceSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.VoiceSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.VoiceSettings}
 */
proto.ondewo.t2s.VoiceSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStability(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSimilarityBoost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStyle(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseSpeakerBoost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.VoiceSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.VoiceSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.VoiceSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.VoiceSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStability();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSimilarityBoost();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getUseSpeakerBoost();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional float stability = 1;
 * @return {number}
 */
proto.ondewo.t2s.VoiceSettings.prototype.getStability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.VoiceSettings} returns this
 */
proto.ondewo.t2s.VoiceSettings.prototype.setStability = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float similarity_boost = 2;
 * @return {number}
 */
proto.ondewo.t2s.VoiceSettings.prototype.getSimilarityBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.VoiceSettings} returns this
 */
proto.ondewo.t2s.VoiceSettings.prototype.setSimilarityBoost = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float style = 3;
 * @return {number}
 */
proto.ondewo.t2s.VoiceSettings.prototype.getStyle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.VoiceSettings} returns this
 */
proto.ondewo.t2s.VoiceSettings.prototype.setStyle = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional bool use_speaker_boost = 4;
 * @return {boolean}
 */
proto.ondewo.t2s.VoiceSettings.prototype.getUseSpeakerBoost = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.VoiceSettings} returns this
 */
proto.ondewo.t2s.VoiceSettings.prototype.setUseSpeakerBoost = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2sCloudServiceAmazon.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2sCloudServiceAmazon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2sCloudServiceAmazon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudServiceAmazon.toObject = function(includeInstance, msg) {
  var f, obj = {
    voiceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2sCloudServiceAmazon}
 */
proto.ondewo.t2s.T2sCloudServiceAmazon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2sCloudServiceAmazon;
  return proto.ondewo.t2s.T2sCloudServiceAmazon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2sCloudServiceAmazon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2sCloudServiceAmazon}
 */
proto.ondewo.t2s.T2sCloudServiceAmazon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoiceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2sCloudServiceAmazon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2sCloudServiceAmazon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2sCloudServiceAmazon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudServiceAmazon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string voice_id = 1;
 * @return {string}
 */
proto.ondewo.t2s.T2sCloudServiceAmazon.prototype.getVoiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceAmazon} returns this
 */
proto.ondewo.t2s.T2sCloudServiceAmazon.prototype.setVoiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_id = 2;
 * @return {string}
 */
proto.ondewo.t2s.T2sCloudServiceAmazon.prototype.getModelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceAmazon} returns this
 */
proto.ondewo.t2s.T2sCloudServiceAmazon.prototype.setModelId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2sCloudServiceGoogle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2sCloudServiceGoogle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.toObject = function(includeInstance, msg) {
  var f, obj = {
    voiceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    speakingRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    volumeGainDb: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    pitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2sCloudServiceGoogle}
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2sCloudServiceGoogle;
  return proto.ondewo.t2s.T2sCloudServiceGoogle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2sCloudServiceGoogle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2sCloudServiceGoogle}
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoiceId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpeakingRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVolumeGainDb(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPitch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2sCloudServiceGoogle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2sCloudServiceGoogle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpeakingRate();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getVolumeGainDb();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getPitch();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional string voice_id = 1;
 * @return {string}
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.prototype.getVoiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceGoogle} returns this
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.prototype.setVoiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float speaking_rate = 2;
 * @return {number}
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.prototype.getSpeakingRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceGoogle} returns this
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.prototype.setSpeakingRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float volume_gain_db = 3;
 * @return {number}
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.prototype.getVolumeGainDb = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceGoogle} returns this
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.prototype.setVolumeGainDb = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float pitch = 4;
 * @return {number}
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.prototype.getPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceGoogle} returns this
 */
proto.ondewo.t2s.T2sCloudServiceGoogle.prototype.setPitch = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2sCloudServiceMicrosoft.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2sCloudServiceMicrosoft} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft.toObject = function(includeInstance, msg) {
  var f, obj = {
    voiceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    useDefaultSpeaker: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2sCloudServiceMicrosoft}
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2sCloudServiceMicrosoft;
  return proto.ondewo.t2s.T2sCloudServiceMicrosoft.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2sCloudServiceMicrosoft} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2sCloudServiceMicrosoft}
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoiceId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseDefaultSpeaker(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2sCloudServiceMicrosoft.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2sCloudServiceMicrosoft} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUseDefaultSpeaker();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string voice_id = 1;
 * @return {string}
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft.prototype.getVoiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceMicrosoft} returns this
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft.prototype.setVoiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool use_default_speaker = 2;
 * @return {boolean}
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft.prototype.getUseDefaultSpeaker = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.T2sCloudServiceMicrosoft} returns this
 */
proto.ondewo.t2s.T2sCloudServiceMicrosoft.prototype.setUseDefaultSpeaker = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Mel2Audio.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Mel2Audio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Mel2Audio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Mel2Audio.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mbMelganTriton: (f = msg.getMbMelganTriton()) && proto.ondewo.t2s.MbMelganTriton.toObject(includeInstance, f),
    hifiGan: (f = msg.getHifiGan()) && proto.ondewo.t2s.HiFiGan.toObject(includeInstance, f),
    hifiGanTriton: (f = msg.getHifiGanTriton()) && proto.ondewo.t2s.HiFiGanTriton.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Mel2Audio}
 */
proto.ondewo.t2s.Mel2Audio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Mel2Audio;
  return proto.ondewo.t2s.Mel2Audio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Mel2Audio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Mel2Audio}
 */
proto.ondewo.t2s.Mel2Audio.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.ondewo.t2s.MbMelganTriton;
      reader.readMessage(value,proto.ondewo.t2s.MbMelganTriton.deserializeBinaryFromReader);
      msg.setMbMelganTriton(value);
      break;
    case 3:
      var value = new proto.ondewo.t2s.HiFiGan;
      reader.readMessage(value,proto.ondewo.t2s.HiFiGan.deserializeBinaryFromReader);
      msg.setHifiGan(value);
      break;
    case 4:
      var value = new proto.ondewo.t2s.HiFiGanTriton;
      reader.readMessage(value,proto.ondewo.t2s.HiFiGanTriton.deserializeBinaryFromReader);
      msg.setHifiGanTriton(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Mel2Audio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Mel2Audio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Mel2Audio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Mel2Audio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMbMelganTriton();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.t2s.MbMelganTriton.serializeBinaryToWriter
    );
  }
  f = message.getHifiGan();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.t2s.HiFiGan.serializeBinaryToWriter
    );
  }
  f = message.getHifiGanTriton();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.t2s.HiFiGanTriton.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.ondewo.t2s.Mel2Audio.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.Mel2Audio} returns this
 */
proto.ondewo.t2s.Mel2Audio.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MbMelganTriton mb_melgan_triton = 2;
 * @return {?proto.ondewo.t2s.MbMelganTriton}
 */
proto.ondewo.t2s.Mel2Audio.prototype.getMbMelganTriton = function() {
  return /** @type{?proto.ondewo.t2s.MbMelganTriton} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.MbMelganTriton, 2));
};


/**
 * @param {?proto.ondewo.t2s.MbMelganTriton|undefined} value
 * @return {!proto.ondewo.t2s.Mel2Audio} returns this
*/
proto.ondewo.t2s.Mel2Audio.prototype.setMbMelganTriton = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Mel2Audio} returns this
 */
proto.ondewo.t2s.Mel2Audio.prototype.clearMbMelganTriton = function() {
  return this.setMbMelganTriton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Mel2Audio.prototype.hasMbMelganTriton = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional HiFiGan hifi_gan = 3;
 * @return {?proto.ondewo.t2s.HiFiGan}
 */
proto.ondewo.t2s.Mel2Audio.prototype.getHifiGan = function() {
  return /** @type{?proto.ondewo.t2s.HiFiGan} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.HiFiGan, 3));
};


/**
 * @param {?proto.ondewo.t2s.HiFiGan|undefined} value
 * @return {!proto.ondewo.t2s.Mel2Audio} returns this
*/
proto.ondewo.t2s.Mel2Audio.prototype.setHifiGan = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Mel2Audio} returns this
 */
proto.ondewo.t2s.Mel2Audio.prototype.clearHifiGan = function() {
  return this.setHifiGan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Mel2Audio.prototype.hasHifiGan = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional HiFiGanTriton hifi_gan_triton = 4;
 * @return {?proto.ondewo.t2s.HiFiGanTriton}
 */
proto.ondewo.t2s.Mel2Audio.prototype.getHifiGanTriton = function() {
  return /** @type{?proto.ondewo.t2s.HiFiGanTriton} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.HiFiGanTriton, 4));
};


/**
 * @param {?proto.ondewo.t2s.HiFiGanTriton|undefined} value
 * @return {!proto.ondewo.t2s.Mel2Audio} returns this
*/
proto.ondewo.t2s.Mel2Audio.prototype.setHifiGanTriton = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Mel2Audio} returns this
 */
proto.ondewo.t2s.Mel2Audio.prototype.clearHifiGanTriton = function() {
  return this.setHifiGanTriton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Mel2Audio.prototype.hasHifiGanTriton = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.HiFiGan.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.HiFiGan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.HiFiGan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.HiFiGan.toObject = function(includeInstance, msg) {
  var f, obj = {
    useGpu: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    batchSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    configPath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    modelPath: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.HiFiGan}
 */
proto.ondewo.t2s.HiFiGan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.HiFiGan;
  return proto.ondewo.t2s.HiFiGan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.HiFiGan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.HiFiGan}
 */
proto.ondewo.t2s.HiFiGan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseGpu(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBatchSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.HiFiGan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.HiFiGan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.HiFiGan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.HiFiGan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseGpu();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBatchSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getConfigPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModelPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bool use_gpu = 1;
 * @return {boolean}
 */
proto.ondewo.t2s.HiFiGan.prototype.getUseGpu = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.HiFiGan} returns this
 */
proto.ondewo.t2s.HiFiGan.prototype.setUseGpu = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 batch_size = 2;
 * @return {number}
 */
proto.ondewo.t2s.HiFiGan.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.HiFiGan} returns this
 */
proto.ondewo.t2s.HiFiGan.prototype.setBatchSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string config_path = 3;
 * @return {string}
 */
proto.ondewo.t2s.HiFiGan.prototype.getConfigPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.HiFiGan} returns this
 */
proto.ondewo.t2s.HiFiGan.prototype.setConfigPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string model_path = 4;
 * @return {string}
 */
proto.ondewo.t2s.HiFiGan.prototype.getModelPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.HiFiGan} returns this
 */
proto.ondewo.t2s.HiFiGan.prototype.setModelPath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.HiFiGanTriton.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.HiFiGanTriton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.HiFiGanTriton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.HiFiGanTriton.toObject = function(includeInstance, msg) {
  var f, obj = {
    configPath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tritonModelName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tritonServerHost: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tritonServerPort: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.HiFiGanTriton}
 */
proto.ondewo.t2s.HiFiGanTriton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.HiFiGanTriton;
  return proto.ondewo.t2s.HiFiGanTriton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.HiFiGanTriton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.HiFiGanTriton}
 */
proto.ondewo.t2s.HiFiGanTriton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTritonModelName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTritonServerHost(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTritonServerPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.HiFiGanTriton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.HiFiGanTriton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.HiFiGanTriton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.HiFiGanTriton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTritonModelName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTritonServerHost();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTritonServerPort();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string config_path = 1;
 * @return {string}
 */
proto.ondewo.t2s.HiFiGanTriton.prototype.getConfigPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.HiFiGanTriton} returns this
 */
proto.ondewo.t2s.HiFiGanTriton.prototype.setConfigPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string triton_model_name = 2;
 * @return {string}
 */
proto.ondewo.t2s.HiFiGanTriton.prototype.getTritonModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.HiFiGanTriton} returns this
 */
proto.ondewo.t2s.HiFiGanTriton.prototype.setTritonModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string triton_server_host = 3;
 * @return {string}
 */
proto.ondewo.t2s.HiFiGanTriton.prototype.getTritonServerHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.HiFiGanTriton} returns this
 */
proto.ondewo.t2s.HiFiGanTriton.prototype.setTritonServerHost = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 triton_server_port = 4;
 * @return {number}
 */
proto.ondewo.t2s.HiFiGanTriton.prototype.getTritonServerPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.HiFiGanTriton} returns this
 */
proto.ondewo.t2s.HiFiGanTriton.prototype.setTritonServerPort = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.MbMelganTriton.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.MbMelganTriton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.MbMelganTriton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.MbMelganTriton.toObject = function(includeInstance, msg) {
  var f, obj = {
    configPath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    statsPath: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tritonModelName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tritonServerHost: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tritonServerPort: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.MbMelganTriton}
 */
proto.ondewo.t2s.MbMelganTriton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.MbMelganTriton;
  return proto.ondewo.t2s.MbMelganTriton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.MbMelganTriton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.MbMelganTriton}
 */
proto.ondewo.t2s.MbMelganTriton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatsPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTritonModelName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTritonServerHost(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTritonServerPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.MbMelganTriton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.MbMelganTriton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.MbMelganTriton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.MbMelganTriton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatsPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTritonModelName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTritonServerHost();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTritonServerPort();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string config_path = 1;
 * @return {string}
 */
proto.ondewo.t2s.MbMelganTriton.prototype.getConfigPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.MbMelganTriton} returns this
 */
proto.ondewo.t2s.MbMelganTriton.prototype.setConfigPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stats_path = 2;
 * @return {string}
 */
proto.ondewo.t2s.MbMelganTriton.prototype.getStatsPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.MbMelganTriton} returns this
 */
proto.ondewo.t2s.MbMelganTriton.prototype.setStatsPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string triton_model_name = 3;
 * @return {string}
 */
proto.ondewo.t2s.MbMelganTriton.prototype.getTritonModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.MbMelganTriton} returns this
 */
proto.ondewo.t2s.MbMelganTriton.prototype.setTritonModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string triton_server_host = 4;
 * @return {string}
 */
proto.ondewo.t2s.MbMelganTriton.prototype.getTritonServerHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.MbMelganTriton} returns this
 */
proto.ondewo.t2s.MbMelganTriton.prototype.setTritonServerHost = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 triton_server_port = 5;
 * @return {number}
 */
proto.ondewo.t2s.MbMelganTriton.prototype.getTritonServerPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.MbMelganTriton} returns this
 */
proto.ondewo.t2s.MbMelganTriton.prototype.setTritonServerPort = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Caching.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Caching.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Caching} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Caching.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    memoryCacheMaxSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    samplingRate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    loadCache: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    saveCache: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    cacheSaveDir: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Caching}
 */
proto.ondewo.t2s.Caching.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Caching;
  return proto.ondewo.t2s.Caching.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Caching} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Caching}
 */
proto.ondewo.t2s.Caching.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemoryCacheMaxSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSamplingRate(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoadCache(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSaveCache(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCacheSaveDir(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Caching.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Caching.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Caching} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Caching.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMemoryCacheMaxSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSamplingRate();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLoadCache();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSaveCache();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCacheSaveDir();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional bool active = 1;
 * @return {boolean}
 */
proto.ondewo.t2s.Caching.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.Caching} returns this
 */
proto.ondewo.t2s.Caching.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 memory_cache_max_size = 2;
 * @return {number}
 */
proto.ondewo.t2s.Caching.prototype.getMemoryCacheMaxSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Caching} returns this
 */
proto.ondewo.t2s.Caching.prototype.setMemoryCacheMaxSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 sampling_rate = 3;
 * @return {number}
 */
proto.ondewo.t2s.Caching.prototype.getSamplingRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Caching} returns this
 */
proto.ondewo.t2s.Caching.prototype.setSamplingRate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool load_cache = 4;
 * @return {boolean}
 */
proto.ondewo.t2s.Caching.prototype.getLoadCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.Caching} returns this
 */
proto.ondewo.t2s.Caching.prototype.setLoadCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool save_cache = 5;
 * @return {boolean}
 */
proto.ondewo.t2s.Caching.prototype.getSaveCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.t2s.Caching} returns this
 */
proto.ondewo.t2s.Caching.prototype.setSaveCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string cache_save_dir = 6;
 * @return {string}
 */
proto.ondewo.t2s.Caching.prototype.getCacheSaveDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.Caching} returns this
 */
proto.ondewo.t2s.Caching.prototype.setCacheSaveDir = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.T2SNormalization.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2SNormalization.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2SNormalization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2SNormalization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2SNormalization.toObject = function(includeInstance, msg) {
  var f, obj = {
    language: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pipelineList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    customPhonemizerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    customLengthScales: (f = msg.getCustomLengthScales()) && proto.ondewo.t2s.T2SCustomLengthScales.toObject(includeInstance, f),
    arpabetMapping: jspb.Message.getFieldWithDefault(msg, 5, ""),
    numericMapping: jspb.Message.getFieldWithDefault(msg, 6, ""),
    callsignsMapping: jspb.Message.getFieldWithDefault(msg, 7, ""),
    phonemeCorrectionMapping: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2SNormalization}
 */
proto.ondewo.t2s.T2SNormalization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2SNormalization;
  return proto.ondewo.t2s.T2SNormalization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2SNormalization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2SNormalization}
 */
proto.ondewo.t2s.T2SNormalization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPipeline(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomPhonemizerId(value);
      break;
    case 4:
      var value = new proto.ondewo.t2s.T2SCustomLengthScales;
      reader.readMessage(value,proto.ondewo.t2s.T2SCustomLengthScales.deserializeBinaryFromReader);
      msg.setCustomLengthScales(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setArpabetMapping(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumericMapping(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallsignsMapping(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonemeCorrectionMapping(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2SNormalization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2SNormalization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2SNormalization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2SNormalization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPipelineList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getCustomPhonemizerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCustomLengthScales();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.t2s.T2SCustomLengthScales.serializeBinaryToWriter
    );
  }
  f = message.getArpabetMapping();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNumericMapping();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCallsignsMapping();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPhonemeCorrectionMapping();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string language = 1;
 * @return {string}
 */
proto.ondewo.t2s.T2SNormalization.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
 */
proto.ondewo.t2s.T2SNormalization.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string pipeline = 2;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.T2SNormalization.prototype.getPipelineList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
 */
proto.ondewo.t2s.T2SNormalization.prototype.setPipelineList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
 */
proto.ondewo.t2s.T2SNormalization.prototype.addPipeline = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
 */
proto.ondewo.t2s.T2SNormalization.prototype.clearPipelineList = function() {
  return this.setPipelineList([]);
};


/**
 * optional string custom_phonemizer_id = 3;
 * @return {string}
 */
proto.ondewo.t2s.T2SNormalization.prototype.getCustomPhonemizerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
 */
proto.ondewo.t2s.T2SNormalization.prototype.setCustomPhonemizerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional T2SCustomLengthScales custom_length_scales = 4;
 * @return {?proto.ondewo.t2s.T2SCustomLengthScales}
 */
proto.ondewo.t2s.T2SNormalization.prototype.getCustomLengthScales = function() {
  return /** @type{?proto.ondewo.t2s.T2SCustomLengthScales} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.T2SCustomLengthScales, 4));
};


/**
 * @param {?proto.ondewo.t2s.T2SCustomLengthScales|undefined} value
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
*/
proto.ondewo.t2s.T2SNormalization.prototype.setCustomLengthScales = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
 */
proto.ondewo.t2s.T2SNormalization.prototype.clearCustomLengthScales = function() {
  return this.setCustomLengthScales(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.T2SNormalization.prototype.hasCustomLengthScales = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string arpabet_mapping = 5;
 * @return {string}
 */
proto.ondewo.t2s.T2SNormalization.prototype.getArpabetMapping = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
 */
proto.ondewo.t2s.T2SNormalization.prototype.setArpabetMapping = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string numeric_mapping = 6;
 * @return {string}
 */
proto.ondewo.t2s.T2SNormalization.prototype.getNumericMapping = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
 */
proto.ondewo.t2s.T2SNormalization.prototype.setNumericMapping = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string callsigns_mapping = 7;
 * @return {string}
 */
proto.ondewo.t2s.T2SNormalization.prototype.getCallsignsMapping = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
 */
proto.ondewo.t2s.T2SNormalization.prototype.setCallsignsMapping = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string phoneme_correction_mapping = 8;
 * @return {string}
 */
proto.ondewo.t2s.T2SNormalization.prototype.getPhonemeCorrectionMapping = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.T2SNormalization} returns this
 */
proto.ondewo.t2s.T2SNormalization.prototype.setPhonemeCorrectionMapping = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.Postprocessing.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Postprocessing.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Postprocessing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Postprocessing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Postprocessing.toObject = function(includeInstance, msg) {
  var f, obj = {
    silenceSecs: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    pipelineList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    logmmse: (f = msg.getLogmmse()) && proto.ondewo.t2s.Logmnse.toObject(includeInstance, f),
    wiener: (f = msg.getWiener()) && proto.ondewo.t2s.Wiener.toObject(includeInstance, f),
    apodization: (f = msg.getApodization()) && proto.ondewo.t2s.Apodization.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Postprocessing}
 */
proto.ondewo.t2s.Postprocessing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Postprocessing;
  return proto.ondewo.t2s.Postprocessing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Postprocessing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Postprocessing}
 */
proto.ondewo.t2s.Postprocessing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSilenceSecs(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPipeline(value);
      break;
    case 3:
      var value = new proto.ondewo.t2s.Logmnse;
      reader.readMessage(value,proto.ondewo.t2s.Logmnse.deserializeBinaryFromReader);
      msg.setLogmmse(value);
      break;
    case 4:
      var value = new proto.ondewo.t2s.Wiener;
      reader.readMessage(value,proto.ondewo.t2s.Wiener.deserializeBinaryFromReader);
      msg.setWiener(value);
      break;
    case 5:
      var value = new proto.ondewo.t2s.Apodization;
      reader.readMessage(value,proto.ondewo.t2s.Apodization.deserializeBinaryFromReader);
      msg.setApodization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Postprocessing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Postprocessing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Postprocessing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Postprocessing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSilenceSecs();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getPipelineList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getLogmmse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.t2s.Logmnse.serializeBinaryToWriter
    );
  }
  f = message.getWiener();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.t2s.Wiener.serializeBinaryToWriter
    );
  }
  f = message.getApodization();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ondewo.t2s.Apodization.serializeBinaryToWriter
    );
  }
};


/**
 * optional float silence_secs = 1;
 * @return {number}
 */
proto.ondewo.t2s.Postprocessing.prototype.getSilenceSecs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Postprocessing} returns this
 */
proto.ondewo.t2s.Postprocessing.prototype.setSilenceSecs = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * repeated string pipeline = 2;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.Postprocessing.prototype.getPipelineList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.Postprocessing} returns this
 */
proto.ondewo.t2s.Postprocessing.prototype.setPipelineList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.Postprocessing} returns this
 */
proto.ondewo.t2s.Postprocessing.prototype.addPipeline = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.Postprocessing} returns this
 */
proto.ondewo.t2s.Postprocessing.prototype.clearPipelineList = function() {
  return this.setPipelineList([]);
};


/**
 * optional Logmnse logmmse = 3;
 * @return {?proto.ondewo.t2s.Logmnse}
 */
proto.ondewo.t2s.Postprocessing.prototype.getLogmmse = function() {
  return /** @type{?proto.ondewo.t2s.Logmnse} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.Logmnse, 3));
};


/**
 * @param {?proto.ondewo.t2s.Logmnse|undefined} value
 * @return {!proto.ondewo.t2s.Postprocessing} returns this
*/
proto.ondewo.t2s.Postprocessing.prototype.setLogmmse = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Postprocessing} returns this
 */
proto.ondewo.t2s.Postprocessing.prototype.clearLogmmse = function() {
  return this.setLogmmse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Postprocessing.prototype.hasLogmmse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Wiener wiener = 4;
 * @return {?proto.ondewo.t2s.Wiener}
 */
proto.ondewo.t2s.Postprocessing.prototype.getWiener = function() {
  return /** @type{?proto.ondewo.t2s.Wiener} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.Wiener, 4));
};


/**
 * @param {?proto.ondewo.t2s.Wiener|undefined} value
 * @return {!proto.ondewo.t2s.Postprocessing} returns this
*/
proto.ondewo.t2s.Postprocessing.prototype.setWiener = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Postprocessing} returns this
 */
proto.ondewo.t2s.Postprocessing.prototype.clearWiener = function() {
  return this.setWiener(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Postprocessing.prototype.hasWiener = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Apodization apodization = 5;
 * @return {?proto.ondewo.t2s.Apodization}
 */
proto.ondewo.t2s.Postprocessing.prototype.getApodization = function() {
  return /** @type{?proto.ondewo.t2s.Apodization} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.t2s.Apodization, 5));
};


/**
 * @param {?proto.ondewo.t2s.Apodization|undefined} value
 * @return {!proto.ondewo.t2s.Postprocessing} returns this
*/
proto.ondewo.t2s.Postprocessing.prototype.setApodization = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.t2s.Postprocessing} returns this
 */
proto.ondewo.t2s.Postprocessing.prototype.clearApodization = function() {
  return this.setApodization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.t2s.Postprocessing.prototype.hasApodization = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Logmnse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Logmnse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Logmnse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Logmnse.toObject = function(includeInstance, msg) {
  var f, obj = {
    initialNoise: jspb.Message.getFieldWithDefault(msg, 1, 0),
    windowSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    noiseThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Logmnse}
 */
proto.ondewo.t2s.Logmnse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Logmnse;
  return proto.ondewo.t2s.Logmnse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Logmnse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Logmnse}
 */
proto.ondewo.t2s.Logmnse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitialNoise(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setNoiseThreshold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Logmnse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Logmnse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Logmnse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Logmnse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitialNoise();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWindowSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNoiseThreshold();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional int64 initial_noise = 1;
 * @return {number}
 */
proto.ondewo.t2s.Logmnse.prototype.getInitialNoise = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Logmnse} returns this
 */
proto.ondewo.t2s.Logmnse.prototype.setInitialNoise = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 window_size = 2;
 * @return {number}
 */
proto.ondewo.t2s.Logmnse.prototype.getWindowSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Logmnse} returns this
 */
proto.ondewo.t2s.Logmnse.prototype.setWindowSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float noise_threshold = 3;
 * @return {number}
 */
proto.ondewo.t2s.Logmnse.prototype.getNoiseThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Logmnse} returns this
 */
proto.ondewo.t2s.Logmnse.prototype.setNoiseThreshold = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Wiener.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Wiener.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Wiener} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Wiener.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameLen: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lpcOrder: jspb.Message.getFieldWithDefault(msg, 2, 0),
    iterations: jspb.Message.getFieldWithDefault(msg, 3, 0),
    alpha: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    thresh: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Wiener}
 */
proto.ondewo.t2s.Wiener.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Wiener;
  return proto.ondewo.t2s.Wiener.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Wiener} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Wiener}
 */
proto.ondewo.t2s.Wiener.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrameLen(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLpcOrder(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIterations(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAlpha(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setThresh(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Wiener.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Wiener.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Wiener} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Wiener.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrameLen();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLpcOrder();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getIterations();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAlpha();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getThresh();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * optional int64 frame_len = 1;
 * @return {number}
 */
proto.ondewo.t2s.Wiener.prototype.getFrameLen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Wiener} returns this
 */
proto.ondewo.t2s.Wiener.prototype.setFrameLen = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 lpc_order = 2;
 * @return {number}
 */
proto.ondewo.t2s.Wiener.prototype.getLpcOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Wiener} returns this
 */
proto.ondewo.t2s.Wiener.prototype.setLpcOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 iterations = 3;
 * @return {number}
 */
proto.ondewo.t2s.Wiener.prototype.getIterations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Wiener} returns this
 */
proto.ondewo.t2s.Wiener.prototype.setIterations = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float alpha = 4;
 * @return {number}
 */
proto.ondewo.t2s.Wiener.prototype.getAlpha = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Wiener} returns this
 */
proto.ondewo.t2s.Wiener.prototype.setAlpha = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float thresh = 5;
 * @return {number}
 */
proto.ondewo.t2s.Wiener.prototype.getThresh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Wiener} returns this
 */
proto.ondewo.t2s.Wiener.prototype.setThresh = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Apodization.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Apodization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Apodization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Apodization.toObject = function(includeInstance, msg) {
  var f, obj = {
    apodizationSecs: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Apodization}
 */
proto.ondewo.t2s.Apodization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Apodization;
  return proto.ondewo.t2s.Apodization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Apodization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Apodization}
 */
proto.ondewo.t2s.Apodization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setApodizationSecs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Apodization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Apodization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Apodization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Apodization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApodizationSecs();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float apodization_secs = 1;
 * @return {number}
 */
proto.ondewo.t2s.Apodization.prototype.getApodizationSecs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.Apodization} returns this
 */
proto.ondewo.t2s.Apodization.prototype.setApodizationSecs = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.T2SCustomLengthScales.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.T2SCustomLengthScales} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2SCustomLengthScales.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    email: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    url: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    phone: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    spell: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    spellWithNames: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    callsignLong: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    callsignShort: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.T2SCustomLengthScales}
 */
proto.ondewo.t2s.T2SCustomLengthScales.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.T2SCustomLengthScales;
  return proto.ondewo.t2s.T2SCustomLengthScales.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.T2SCustomLengthScales} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.T2SCustomLengthScales}
 */
proto.ondewo.t2s.T2SCustomLengthScales.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPhone(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpell(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpellWithNames(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCallsignLong(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCallsignShort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.T2SCustomLengthScales.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.T2SCustomLengthScales} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.T2SCustomLengthScales.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getPhone();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getSpell();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getSpellWithNames();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getCallsignLong();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getCallsignShort();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
};


/**
 * optional float text = 1;
 * @return {number}
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.getText = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2SCustomLengthScales} returns this
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.setText = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float email = 2;
 * @return {number}
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.getEmail = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2SCustomLengthScales} returns this
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.setEmail = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float url = 3;
 * @return {number}
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.getUrl = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2SCustomLengthScales} returns this
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.setUrl = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float phone = 4;
 * @return {number}
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.getPhone = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2SCustomLengthScales} returns this
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.setPhone = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float spell = 5;
 * @return {number}
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.getSpell = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2SCustomLengthScales} returns this
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.setSpell = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float spell_with_names = 6;
 * @return {number}
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.getSpellWithNames = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2SCustomLengthScales} returns this
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.setSpellWithNames = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float callsign_long = 7;
 * @return {number}
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.getCallsignLong = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2SCustomLengthScales} returns this
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.setCallsignLong = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float callsign_short = 8;
 * @return {number}
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.getCallsignShort = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.t2s.T2SCustomLengthScales} returns this
 */
proto.ondewo.t2s.T2SCustomLengthScales.prototype.setCallsignShort = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.PhonemizerId.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.PhonemizerId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.PhonemizerId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.PhonemizerId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.PhonemizerId}
 */
proto.ondewo.t2s.PhonemizerId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.PhonemizerId;
  return proto.ondewo.t2s.PhonemizerId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.PhonemizerId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.PhonemizerId}
 */
proto.ondewo.t2s.PhonemizerId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.PhonemizerId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.PhonemizerId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.PhonemizerId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.PhonemizerId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ondewo.t2s.PhonemizerId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.PhonemizerId} returns this
 */
proto.ondewo.t2s.PhonemizerId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.CustomPhonemizerProto.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.CustomPhonemizerProto.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.CustomPhonemizerProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.CustomPhonemizerProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.CustomPhonemizerProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mapsList: jspb.Message.toObjectList(msg.getMapsList(),
    proto.ondewo.t2s.Map.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.CustomPhonemizerProto}
 */
proto.ondewo.t2s.CustomPhonemizerProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.CustomPhonemizerProto;
  return proto.ondewo.t2s.CustomPhonemizerProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.CustomPhonemizerProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.CustomPhonemizerProto}
 */
proto.ondewo.t2s.CustomPhonemizerProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.ondewo.t2s.Map;
      reader.readMessage(value,proto.ondewo.t2s.Map.deserializeBinaryFromReader);
      msg.addMaps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.CustomPhonemizerProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.CustomPhonemizerProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.CustomPhonemizerProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.CustomPhonemizerProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.t2s.Map.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ondewo.t2s.CustomPhonemizerProto.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.CustomPhonemizerProto} returns this
 */
proto.ondewo.t2s.CustomPhonemizerProto.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Map maps = 2;
 * @return {!Array<!proto.ondewo.t2s.Map>}
 */
proto.ondewo.t2s.CustomPhonemizerProto.prototype.getMapsList = function() {
  return /** @type{!Array<!proto.ondewo.t2s.Map>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.t2s.Map, 2));
};


/**
 * @param {!Array<!proto.ondewo.t2s.Map>} value
 * @return {!proto.ondewo.t2s.CustomPhonemizerProto} returns this
*/
proto.ondewo.t2s.CustomPhonemizerProto.prototype.setMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.t2s.Map=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.Map}
 */
proto.ondewo.t2s.CustomPhonemizerProto.prototype.addMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.t2s.Map, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.CustomPhonemizerProto} returns this
 */
proto.ondewo.t2s.CustomPhonemizerProto.prototype.clearMapsList = function() {
  return this.setMapsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.Map.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.Map.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.Map} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Map.toObject = function(includeInstance, msg) {
  var f, obj = {
    word: jspb.Message.getFieldWithDefault(msg, 1, ""),
    phonemeGroups: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.Map}
 */
proto.ondewo.t2s.Map.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.Map;
  return proto.ondewo.t2s.Map.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.Map} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.Map}
 */
proto.ondewo.t2s.Map.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWord(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonemeGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.Map.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.Map.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.Map} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.Map.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWord();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPhonemeGroups();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string word = 1;
 * @return {string}
 */
proto.ondewo.t2s.Map.prototype.getWord = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.Map} returns this
 */
proto.ondewo.t2s.Map.prototype.setWord = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string phoneme_groups = 2;
 * @return {string}
 */
proto.ondewo.t2s.Map.prototype.getPhonemeGroups = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.Map} returns this
 */
proto.ondewo.t2s.Map.prototype.setPhonemeGroups = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.ListCustomPhonemizerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.ListCustomPhonemizerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    phonemizersList: jspb.Message.toObjectList(msg.getPhonemizersList(),
    proto.ondewo.t2s.CustomPhonemizerProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.ListCustomPhonemizerResponse}
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.ListCustomPhonemizerResponse;
  return proto.ondewo.t2s.ListCustomPhonemizerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.ListCustomPhonemizerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.ListCustomPhonemizerResponse}
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.t2s.CustomPhonemizerProto;
      reader.readMessage(value,proto.ondewo.t2s.CustomPhonemizerProto.deserializeBinaryFromReader);
      msg.addPhonemizers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.ListCustomPhonemizerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.ListCustomPhonemizerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhonemizersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.t2s.CustomPhonemizerProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomPhonemizerProto phonemizers = 1;
 * @return {!Array<!proto.ondewo.t2s.CustomPhonemizerProto>}
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse.prototype.getPhonemizersList = function() {
  return /** @type{!Array<!proto.ondewo.t2s.CustomPhonemizerProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.t2s.CustomPhonemizerProto, 1));
};


/**
 * @param {!Array<!proto.ondewo.t2s.CustomPhonemizerProto>} value
 * @return {!proto.ondewo.t2s.ListCustomPhonemizerResponse} returns this
*/
proto.ondewo.t2s.ListCustomPhonemizerResponse.prototype.setPhonemizersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.t2s.CustomPhonemizerProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.CustomPhonemizerProto}
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse.prototype.addPhonemizers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.t2s.CustomPhonemizerProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListCustomPhonemizerResponse} returns this
 */
proto.ondewo.t2s.ListCustomPhonemizerResponse.prototype.clearPhonemizersList = function() {
  return this.setPhonemizersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.ListCustomPhonemizerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.ListCustomPhonemizerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pipelineIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.ListCustomPhonemizerRequest}
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.ListCustomPhonemizerRequest;
  return proto.ondewo.t2s.ListCustomPhonemizerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.ListCustomPhonemizerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.ListCustomPhonemizerRequest}
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPipelineIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.ListCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.ListCustomPhonemizerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPipelineIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string pipeline_ids = 1;
 * @return {!Array<string>}
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.prototype.getPipelineIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.t2s.ListCustomPhonemizerRequest} returns this
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.prototype.setPipelineIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.ListCustomPhonemizerRequest} returns this
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.prototype.addPipelineIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.ListCustomPhonemizerRequest} returns this
 */
proto.ondewo.t2s.ListCustomPhonemizerRequest.prototype.clearPipelineIdsList = function() {
  return this.setPipelineIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.UpdateCustomPhonemizerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateMethod: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mapsList: jspb.Message.toObjectList(msg.getMapsList(),
    proto.ondewo.t2s.Map.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest}
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.UpdateCustomPhonemizerRequest;
  return proto.ondewo.t2s.UpdateCustomPhonemizerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest}
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest.UpdateMethod} */ (reader.readEnum());
      msg.setUpdateMethod(value);
      break;
    case 3:
      var value = new proto.ondewo.t2s.Map;
      reader.readMessage(value,proto.ondewo.t2s.Map.deserializeBinaryFromReader);
      msg.addMaps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.UpdateCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdateMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.t2s.Map.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.UpdateMethod = {
  EXTEND_HARD: 0,
  EXTEND_SOFT: 1,
  REPLACE: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest} returns this
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UpdateMethod update_method = 2;
 * @return {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest.UpdateMethod}
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.prototype.getUpdateMethod = function() {
  return /** @type {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest.UpdateMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest.UpdateMethod} value
 * @return {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest} returns this
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.prototype.setUpdateMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Map maps = 3;
 * @return {!Array<!proto.ondewo.t2s.Map>}
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.prototype.getMapsList = function() {
  return /** @type{!Array<!proto.ondewo.t2s.Map>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.t2s.Map, 3));
};


/**
 * @param {!Array<!proto.ondewo.t2s.Map>} value
 * @return {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest} returns this
*/
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.prototype.setMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.t2s.Map=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.Map}
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.prototype.addMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.t2s.Map, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest} returns this
 */
proto.ondewo.t2s.UpdateCustomPhonemizerRequest.prototype.clearMapsList = function() {
  return this.setMapsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.t2s.CreateCustomPhonemizerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.t2s.CreateCustomPhonemizerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mapsList: jspb.Message.toObjectList(msg.getMapsList(),
    proto.ondewo.t2s.Map.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.t2s.CreateCustomPhonemizerRequest}
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.t2s.CreateCustomPhonemizerRequest;
  return proto.ondewo.t2s.CreateCustomPhonemizerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.t2s.CreateCustomPhonemizerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.t2s.CreateCustomPhonemizerRequest}
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = new proto.ondewo.t2s.Map;
      reader.readMessage(value,proto.ondewo.t2s.Map.deserializeBinaryFromReader);
      msg.addMaps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.t2s.CreateCustomPhonemizerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.t2s.CreateCustomPhonemizerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.t2s.Map.serializeBinaryToWriter
    );
  }
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.t2s.CreateCustomPhonemizerRequest} returns this
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Map maps = 2;
 * @return {!Array<!proto.ondewo.t2s.Map>}
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.prototype.getMapsList = function() {
  return /** @type{!Array<!proto.ondewo.t2s.Map>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.t2s.Map, 2));
};


/**
 * @param {!Array<!proto.ondewo.t2s.Map>} value
 * @return {!proto.ondewo.t2s.CreateCustomPhonemizerRequest} returns this
*/
proto.ondewo.t2s.CreateCustomPhonemizerRequest.prototype.setMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.t2s.Map=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.t2s.Map}
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.prototype.addMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.t2s.Map, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.t2s.CreateCustomPhonemizerRequest} returns this
 */
proto.ondewo.t2s.CreateCustomPhonemizerRequest.prototype.clearMapsList = function() {
  return this.setMapsList([]);
};


/**
 * @enum {number}
 */
proto.ondewo.t2s.Pcm = {
  PCM_16: 0,
  PCM_24: 1,
  PCM_32: 2,
  PCM_S8: 3,
  PCM_U8: 4,
  FLOAT: 5,
  DOUBLE: 6
};

/**
 * @enum {number}
 */
proto.ondewo.t2s.AudioFormat = {
  WAV: 0,
  FLAC: 1,
  CAF: 2,
  MP3: 3,
  AAC: 4,
  OGG: 5,
  WMA: 6
};

goog.object.extend(exports, proto.ondewo.t2s);

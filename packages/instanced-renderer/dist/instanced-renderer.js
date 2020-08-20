/*!
 * @pixi-essentials/instanced-renderer - v0.0.1
 * Compiled Thu, 20 Aug 2020 23:24:32 UTC
 *
 * @pixi-essentials/instanced-renderer is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2019-2020, Shukant K. Pal, All Rights Reserved
 */
this.PIXI=this.PIXI||{};var _pixi_essentials_instanced_renderer=function(t,e,s,i){"use strict";let n=0;class r extends e.ObjectRenderer{constructor(t,s){super(t),this._aBuffers=[],this.instanceRendererID=`instanceRenderer-${n++}-ID`,this._instanceBuilder=s.instanceBuilder,this._geometry=s.geometry,this._shader=s.shader,this._state=s.state||e.State.for2d(),this._instanceAttribSizes={},this._instanceAttribViews={},this._instanceSize=this._calculateInstanceSizesAndViews(),this._objectBuffer=[],this._objectCount=0,this._initInstanceBuffer()}start(){this._objectCount=0}render(t){this._objectBuffer[this._objectCount]=t,++this._objectCount}flush(){const t=this._instanceBuilder,e=this._instanceSize,i=this._getBuffer(this._objectCount*this._instanceSize);for(let s=0;s<this._objectCount;s++){let n=0;const r=this._objectBuffer[s];for(const a in this._instanceBuilder){const c=this._geometry.attributes[a];if(!c.instance)continue;const _=c.size,o=i[this._instanceAttribViews[a]],h=this._instanceAttribSizes[a],u=(s*e+n)/h,f=t[a];if(1===_)o[u]=r[f];else for(let t=0;t<_;t++)o[u+t]=r[f][t];n+=h}}this._instanceBuffer.update(i.rawBinaryData);const n=this.renderer;n.shader.bind(this._shader),n.geometry.bind(this._geometry),n.state.set(this._state),n.geometry.draw(s.DRAW_MODES.TRIANGLES,void 0,void 0,this._objectCount),this._objectCount=0}_getBuffer(t){const s=i.nextPow2(Math.ceil(t)),n=i.log2(s),r=s;this._aBuffers.length<=n&&(this._aBuffers.length=n+1);let a=this._aBuffers[r];return a||(this._aBuffers[r]=a=new e.ViewableBuffer(r)),a}_calculateInstanceSizesAndViews(){let t=0;for(const e in this._geometry.attributes){const i=this._geometry.attributes[e];if(!i.instance)continue;let n,r=0;switch(i.type){case s.TYPES.UNSIGNED_BYTE:r=1,n="uint8View";break;case s.TYPES.UNSIGNED_SHORT:case s.TYPES.UNSIGNED_SHORT_5_6_5:case s.TYPES.UNSIGNED_SHORT_4_4_4_4:case s.TYPES.UNSIGNED_SHORT_5_5_5_1:case s.TYPES.HALF_FLOAT:r=2,n="uint16View";break;case s.TYPES.FLOAT:r=4,n="float32View"}const a=i.size*r;this._instanceAttribViews[e]=n,this._instanceAttribSizes[e]=a,t+=a}return t}_initInstanceBuffer(){this._instanceBuffer=new e.Buffer;const t=new e.Geometry;for(const e in this._geometry.attributes){const s=this._geometry.attributes[e],i=s.instance;console.log(e),console.log(this._geometry.buffers[s.buffer]),t.addAttribute(e,i?this._instanceBuffer:this._geometry.buffers[s.buffer],s.size,s.normalized,s.type,i?s.start:void 0,i?s.stride:void 0,s.instance)}this._geometry=t}}return t.InstancedRenderer=r,t.InstancedRendererPluginFactory=class{static from(t){return class extends r{constructor(e){super(e,t)}}}},t}({},PIXI,PIXI,PIXI);Object.assign(this.PIXI,_pixi_essentials_instanced_renderer);
//# sourceMappingURL=instanced-renderer.js.map

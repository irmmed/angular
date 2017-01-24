/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {AnimationStyles} from './animation_styles';

/**
 * @experimental
 */
export class AnimationKeyframe {
  constructor(public offset: number, public styles: AnimationStyles) {}
}

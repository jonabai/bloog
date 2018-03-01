import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BloogBlogModule } from './blog/blog.module';
import { BloogEntryModule } from './entry/entry.module';
import { BloogTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BloogBlogModule,
        BloogEntryModule,
        BloogTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BloogEntityModule {}

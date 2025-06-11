import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './bars/contact-us/contact-us.component';
import { BirthdayPageComponent } from './pages/page-components/birthday-page/birthday-page.component';
import { CollegeFestPageComponent } from './pages/page-components/college-fest-page/college-fest-page.component';
import { CorporateEventPageComponent } from './pages/page-components/corporate-event-page/corporate-event-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageComponentsComponent } from './pages/page-components/page-components.component';
import { ServicesComponent } from './pages/page-components/services/services.component';
import { WhyUsComponent } from './pages/page-components/why-us/why-us.component';
import { PagesComponent } from './pages/pages.component';
import { WeddingPageComponent } from './pages/page-components/wedding-page/wedding-page.component';
import { AdminComponent } from './admin/admin.component';
import { ImageUploadComponent } from './admin/image-upload/image-upload.component';
import { EngagementPageComponent } from './pages/page-components/engagement-page/engagement-page.component';
import { GalleryComponent } from './pages/page-components/gallery/gallery.component';
import { ReviewUploadComponent } from './admin/review-upload/review-upload.component';
import { ClientReviewFormComponent } from './client-review-form/client-review-form.component';
import { ChangeGalleryComponent } from './admin/change-gallery/change-gallery.component';
import { ProductLaunchComponent } from './pages/page-components/product-launch/product-launch.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'best-event-organizer',
        pathMatch: 'full',
      },
      {
        path: 'best-event-organizer',
        component: HomePageComponent,
      },
      {
        path: 'default',
        component: PageComponentsComponent,
        children: [
          {
            path: 'services',
            component: ServicesComponent,
          },
          {
            path: 'contact-us',
            component: ContactUsComponent,
          },
          {
            path: 'why-primeevent',
            component: WhyUsComponent,
          },
          {
            path: 'wedding-or-anniversary-event',
            component: WeddingPageComponent,
          },
          {
            path: 'engagement-or-ring-ceremony-event',
            component: EngagementPageComponent,
          },
          {
            path: 'birthday-house-party',
            component: BirthdayPageComponent,
          },
          {
            path: 'school-college-event',
            component: CollegeFestPageComponent,
          },
          {
            path: 'corporate-or-office-event',
            component: CorporateEventPageComponent,
          },
          {
            path: 'product-launch-event',
            component: ProductLaunchComponent,
          },
          {
            path: 'feedback',
            component: ClientReviewFormComponent,
          },
          {
            path: 'about',
            component: AboutComponent,
          },
          {
            path: 'portfolio',
            component: GalleryComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'review-uploader',
        pathMatch: 'full',
      },
      // {
      //   path: 'gallery-uploader',
      //   component: ImageUploadComponent,
      // },
      {
        path: 'review-uploader',
        component: ReviewUploadComponent,
      },
      {
        path: 'change-gallery',
        component: ChangeGalleryComponent,
      },
    ],
  },

  {
    path: 'client-review/:name',
    component: ClientReviewFormComponent,
  },
  {
    path: 'client-review',
    component: ClientReviewFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import React from 'react';
import Link from 'next/link';
import { Test } from '@uniformdev/context-react';
import { TestVariant } from '@uniformdev/context';
import Image from 'next/image';
import { Asset, WhyAttend as WhyAttendTypesProps } from '../graphql-types';

enum WhyAttendVariant {
  Left = 'left image',
  Right = 'right image',
}

const locationVariants: TestVariant[] = [{ id: WhyAttendVariant.Left }, { id: WhyAttendVariant.Right }];

export const WhyAttendTestPhotoLocation = (props: WhyAttendTypesProps) => {
  return (
    <Test
      name="whyAttendTest"
      variations={locationVariants}
      component={({ id }) => <WhyAttend {...props} variant={id} />}
    />
  );
};

export const WhyAttend = (fields: WhyAttendTypesProps & { variant?: string }) => {
  const { title, description, image } = fields || {};
  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{title}</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        {fields.variant === WhyAttendVariant.Left ? (
          <ImageLeftCallout description={description!} image={image!} variant={fields.variant} />
        ) : (
          <ImageRightCallout description={description!} image={image!} variant={fields.variant!} />
        )}
      </div>
    </section>
  );
};

type CalloutProps = {
  description: string;
  image: Asset;
  variant: string;
};

const ImageRightCallout = ({ description, image, variant }: CalloutProps) => {
  let labelStyle = 'bg-blue-800 text-white';
  if (variant === WhyAttendVariant.Left) {
    labelStyle = 'bg-green-100 text-green-800';
  } else if (variant === WhyAttendVariant.Right) {
    labelStyle = 'bg-red-800 text-white';
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-5/6 sm:w-1/2 p-6">
        <span className={`mb-8 px-6 inline-flex text-xs leading-5 font-semibold rounded-full ${labelStyle}`}>
          {variant} variant
        </span>
        <p className="text-gray-600 mb-8" dangerouslySetInnerHTML={{ __html: description }} />
        <Link prefetch={false} href={'/registration'}>
          <button className="mx-auto lg:mx-0 hover:underline bg-indigo-800 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
            Register now
          </button>
        </Link>
      </div>
      <div className="w-full sm:w-1/2 p-6">
        {image.url ? (
          <Image
            src={image.url}
            layout="responsive"
            loading="lazy"
            className="w-full sm:h-64 mx-auto"
            height={373}
            width={560}
          />
        ) : null}
      </div>
    </div>
  );
};

const ImageLeftCallout = ({ description, image, variant }: CalloutProps) => {
  let labelStyle = 'bg-red-100 text-red-800';
  if (variant === WhyAttendVariant.Left) {
    labelStyle = 'bg-green-100 text-green-800';
  } else if (variant === WhyAttendVariant.Right) {
    labelStyle = 'bg-red-800 text-white';
  }

  return (
    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
      <div className="w-full sm:w-1/2 p-6 mt-6">
        {image.url ? (
          <Image
            src={image.url}
            layout="responsive"
            loading="lazy"
            className="w-5/6 sm:h-64 mx-auto"
            height={373}
            width={560}
          />
        ) : null}
      </div>
      <div className="w-full sm:w-1/2 p-6 mt-6">
        <div className="align-middle">
          <span
            className={`mb-8 px-6 inline-flex text-xs leading-5 font-semibold rounded-full ${labelStyle}`}
          >
            {variant} variant
          </span>
          <p className="text-gray-600 mb-8" dangerouslySetInnerHTML={{ __html: description }} />
          <Link prefetch={false} href={'/registration'}>
            <button className="mx-auto lg:mx-0 hover:underline bg-green-800 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              Register now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

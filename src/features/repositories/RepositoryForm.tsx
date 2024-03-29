import React from 'react';

import { Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FieldInput } from '@/components/FieldInput';
import { FieldTextarea } from '@/components/FieldTextarea';

export type RepositoryFormFields = {
  name: string;
  link: string;
  description?: string | null;
};

export const RepositoryForm = () => {
  const { t } = useTranslation(['common', 'repositories']);

  return (
    <Stack spacing={4}>
      <FieldInput
        name="name"
        label={t('repositories:data.name.label')}
        required={t('repositories:data.name.required')}
      />
      <FieldInput
        name="link"
        required={t('repositories:data.link.required')}
        label={t('repositories:data.link.label')}
      />
      <FieldTextarea
        name="description"
        label={t('repositories:data.description.label')}
        textareaProps={{ rows: 6 }}
      />
    </Stack>
  );
};

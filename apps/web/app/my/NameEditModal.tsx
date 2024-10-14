'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Modal } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';

import { useGetMyProfile, usePutMy } from '@repo/services';

import { ModalBody } from 'components/ModalBody';

const NameEditModal = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: myData } = useGetMyProfile();
  const { mutate: putMy } = usePutMy();

  const [value, setValue] = useState(myData?.nickName ?? '');

  const handleEditName = () => {
    putMy(
      { nickName: value },
      {
        onSuccess: () => {
          callback();
          queryClient.invalidateQueries({ queryKey: ['myProfile'] });
        },
      }
    );
  };

  const callback = () => {
    router.replace('/my', { scroll: false });
  };

  useEffect(() => {
    setValue(myData?.nickName ?? '');
  }, [myData]);

  return (
    <Modal open={true}>
      <ModalBody
        title="닉네임 변경하기"
        checkBtnName="변경"
        cancelBtn
        children={
          <div className="flex w-full flex-col gap-[8px]">
            <label className="w-full rounded-lg bg-[#444444] p-[10px]">
              <input
                className="w-full text-sm leading-[18px] text-[#919191]"
                placeholder="변경할 닉네임을 입력해 주세요. (2~15자)"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                maxLength={15}
              />
            </label>
            <div className="pl-[8px] text-xs font-normal text-[#79a56f]">message</div>
          </div>
        }
        cancelCallback={callback}
        callback={handleEditName}
      />
    </Modal>
  );
};

export default NameEditModal;

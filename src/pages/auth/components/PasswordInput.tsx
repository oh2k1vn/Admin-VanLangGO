import { useState } from 'react';
import { BiCheck, BiX } from 'react-icons/bi';
import { PasswordInput as PasssInput, Progress, Text, Popover, Box } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size='sm'
    >
      {meets ? <BiCheck size={14} /> : <BiX size={14} />} <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Bao gồm số' },
  { re: /[a-z]/, label: 'Bao gồm chữ thường' },
  { re: /[A-Z]/, label: 'Bao gồm chữ hoa' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Bao gồm biểu tượng đặc biệt' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;  
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export function PasswordInput(props: any) {
  const { setPassword, password } = props;
  const [popoverOpened, setPopoverOpened] = useState(false);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(password)}
    />
  ));

  const strength = getStrength(password);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <>
      <Popover opened={popoverOpened} position='bottom' width='target' transition='pop'>
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            <PasssInput
              mt={'sm'}
              required
              label='Mật khẩu của bạn'
              placeholder='Mật khẩu của bạn'
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress color={color} value={strength} size={5} style={{ marginBottom: 10 }} />
          <PasswordRequirement label='Bao gồm ít nhất 6 ký tự' meets={password.length > 5} />
          {checks}
        </Popover.Dropdown>
      </Popover>
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const SelectButton = styled.button`
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  max-height: 150px;
  overflow-y: auto;
`;

const Option = styled.div<{ isSelected: boolean }>`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  ${(props) =>
    props.isSelected &&
    `
    background-color: #007bff;
    color: #fff;
  `}
`;

type SelectDropdownProps = {
  options?: string[]; // options prop을 선택적으로 받을 수 있도록 변경
};

const NotFound: React.FC<SelectDropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 예시 options 정의
  const exampleOptions = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // 클릭 이벤트가 드롭다운 외부에서 발생하면 드롭다운을 닫음
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너를 정리
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <SelectWrapper>
        <SelectButton onClick={toggleDropdown}>
          {selectedOptions.length === 0
            ? "Select Options"
            : selectedOptions.join(", ")}
          <span>&#9660;</span>
        </SelectButton>
        {isOpen && (
          <Dropdown ref={dropdownRef}>
            <input
              type="text"
              placeholder="Search options..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {(options || exampleOptions) // options prop이 있으면 그것을 사용하고, 없으면 예시 options 사용
              .filter((option) =>
                option.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((option, index) => (
                <Option
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  isSelected={selectedOptions.includes(option)}
                >
                  {option}
                </Option>
              ))}
          </Dropdown>
        )}
      </SelectWrapper>
      {selectedOptions}
    </>
  );
};

export default NotFound;

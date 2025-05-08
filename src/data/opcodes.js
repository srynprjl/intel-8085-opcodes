export default [
        {
            "opcode": "00",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation"
        },
        {
            "opcode": "01",
            "mnemonic": "LXI B,d16",
            "bytes": 3,
            "flags": "None",
            "description": "Load immediate register pair B-C with 16-bit data"
        },
        {
            "opcode": "02",
            "mnemonic": "STAX B",
            "bytes": 1,
            "flags": "None",
            "description": "Store accumulator direct at address in B-C"
        },
        {
            "opcode": "03",
            "mnemonic": "INX B",
            "bytes": 1,
            "flags": "None",
            "description": "Increment register pair B-C"
        },
        {
            "opcode": "04",
            "mnemonic": "INR B",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Increment register B"
        },
        {
            "opcode": "05",
            "mnemonic": "DCR B",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Decrement register B"
        },
        {
            "opcode": "06",
            "mnemonic": "MVI B,d8",
            "bytes": 2,
            "flags": "None",
            "description": "Move immediate 8-bit data to register B"
        },
        {
            "opcode": "07",
            "mnemonic": "RLC",
            "bytes": 1,
            "flags": "CY",
            "description": "Rotate accumulator left through carry"
        },
        {
            "opcode": "08",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation (Undocumented)"
        },
        {
            "opcode": "09",
            "mnemonic": "DAD B",
            "bytes": 1,
            "flags": "CY",
            "description": "Double add register pair B-C to H-L"
        },
        {
            "opcode": "0A",
            "mnemonic": "LDAX B",
            "bytes": 1,
            "flags": "None",
            "description": "Load accumulator direct from address in B-C"
        },
        {
            "opcode": "0B",
            "mnemonic": "DCX B",
            "bytes": 1,
            "flags": "None",
            "description": "Decrement register pair B-C"
        },
        {
            "opcode": "0C",
            "mnemonic": "INR C",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Increment register C"
        },
        {
            "opcode": "0D",
            "mnemonic": "DCR C",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Decrement register C"
        },
        {
            "opcode": "0E",
            "mnemonic": "MVI C,d8",
            "bytes": 2,
            "flags": "None",
            "description": "Move immediate 8-bit data to register C"
        },
        {
            "opcode": "0F",
            "mnemonic": "RRC",
            "bytes": 1,
            "flags": "CY",
            "description": "Rotate accumulator right through carry"
        },
        {
            "opcode": "10",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation (Undocumented)"
        },
        {
            "opcode": "11",
            "mnemonic": "LXI D,d16",
            "bytes": 3,
            "flags": "None",
            "description": "Load immediate register pair D-E with 16-bit data"
        },
        {
            "opcode": "12",
            "mnemonic": "STAX D",
            "bytes": 1,
            "flags": "None",
            "description": "Store accumulator direct at address in D-E"
        },
        {
            "opcode": "13",
            "mnemonic": "INX D",
            "bytes": 1,
            "flags": "None",
            "description": "Increment register pair D-E"
        },
        {
            "opcode": "14",
            "mnemonic": "INR D",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Increment register D"
        },
        {
            "opcode": "15",
            "mnemonic": "DCR D",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Decrement register D"
        },
        {
            "opcode": "16",
            "mnemonic": "MVI D,d8",
            "bytes": 2,
            "flags": "None",
            "description": "Move immediate 8-bit data to register D"
        },
        {
            "opcode": "17",
            "mnemonic": "RAL",
            "bytes": 1,
            "flags": "CY",
            "description": "Rotate accumulator left through carry"
        },
        {
            "opcode": "18",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation (Undocumented)"
        },
        {
            "opcode": "19",
            "mnemonic": "DAD D",
            "bytes": 1,
            "flags": "CY",
            "description": "Double add register pair D-E to H-L"
        },
        {
            "opcode": "1A",
            "mnemonic": "LDAX D",
            "bytes": 1,
            "flags": "None",
            "description": "Load accumulator direct from address in D-E"
        },
        {
            "opcode": "1B",
            "mnemonic": "DCX D",
            "bytes": 1,
            "flags": "None",
            "description": "Decrement register pair D-E"
        },
        {
            "opcode": "1C",
            "mnemonic": "INR E",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Increment register E"
        },
        {
            "opcode": "1D",
            "mnemonic": "DCR E",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Decrement register E"
        },
        {
            "opcode": "1E",
            "mnemonic": "MVI E,d8",
            "bytes": 2,
            "flags": "None",
            "description": "Move immediate 8-bit data to register E"
        },
        {
            "opcode": "1F",
            "mnemonic": "RAR",
            "bytes": 1,
            "flags": "CY",
            "description": "Rotate accumulator right through carry"
        },
        {
            "opcode": "20",
            "mnemonic": "RIM",
            "bytes": 1,
            "flags": "None",
            "description": "Read Interrupt Mask"
        },
        {
            "opcode": "21",
            "mnemonic": "LXI H,d16",
            "bytes": 3,
            "flags": "None",
            "description": "Load immediate register pair H-L with 16-bit data"
        },
        {
            "opcode": "22",
            "mnemonic": "SHLD adr",
            "bytes": 3,
            "flags": "None",
            "description": "Store H-L direct"
        },
        {
            "opcode": "23",
            "mnemonic": "INX H",
            "bytes": 1,
            "flags": "None",
            "description": "Increment register pair H-L"
        },
        {
            "opcode": "24",
            "mnemonic": "INR H",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Increment register H"
        },
        {
            "opcode": "25",
            "mnemonic": "DCR H",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Decrement register H"
        },
        {
            "opcode": "26",
            "mnemonic": "MVI H,d8",
            "bytes": 2,
            "flags": "None",
            "description": "Move immediate 8-bit data to register H"
        },
        {
            "opcode": "27",
            "mnemonic": "DAA",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Decimal Adjust Accumulator"
        },
        {
            "opcode": "28",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation (Undocumented)"
        },
        {
            "opcode": "29",
            "mnemonic": "DAD H",
            "bytes": 1,
            "flags": "CY",
            "description": "Double add register pair H-L to H-L"
        },
        {
            "opcode": "2A",
            "mnemonic": "LHLD adr",
            "bytes": 3,
            "flags": "None",
            "description": "Load H-L direct"
        },
        {
            "opcode": "2B",
            "mnemonic": "DCX H",
            "bytes": 1,
            "flags": "None",
            "description": "Decrement register pair H-L"
        },
        {
            "opcode": "2C",
            "mnemonic": "INR L",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Increment register L"
        },
        {
            "opcode": "2D",
            "mnemonic": "DCR L",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Decrement register L"
        },
        {
            "opcode": "2E",
            "mnemonic": "MVI L,d8",
            "bytes": 2,
            "flags": "None",
            "description": "Move immediate 8-bit data to register L"
        },
        {
            "opcode": "2F",
            "mnemonic": "CMA",
            "bytes": 1,
            "flags": "None",
            "description": "Complement Accumulator"
        },
        {
            "opcode": "30",
            "mnemonic": "SIM",
            "bytes": 1,
            "flags": "None",
            "description": "Set Interrupt Mask"
        },
        {
            "opcode": "31",
            "mnemonic": "LXI SP,d16",
            "bytes": 3,
            "flags": "None",
            "description": "Load immediate stack pointer with 16-bit data"
        },
        {
            "opcode": "32",
            "mnemonic": "STA adr",
            "bytes": 3,
            "flags": "None",
            "description": "Store accumulator direct"
        },
        {
            "opcode": "33",
            "mnemonic": "INX SP",
            "bytes": 1,
            "flags": "None",
            "description": "Increment stack pointer"
        },
        {
            "opcode": "34",
            "mnemonic": "INR M",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Increment memory location pointed by H-L"
        },
        {
            "opcode": "35",
            "mnemonic": "DCR M",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Decrement memory location pointed by H-L"
        },
        {
            "opcode": "36",
            "mnemonic": "MVI M,d8",
            "bytes": 2,
            "flags": "None",
            "description": "Move immediate 8-bit data to memory location pointed by H-L"
        },
        {
            "opcode": "37",
            "mnemonic": "STC",
            "bytes": 1,
            "flags": "CY",
            "description": "Set Carry flag"
        },
        {
            "opcode": "38",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation (Undocumented)"
        },
        {
            "opcode": "39",
            "mnemonic": "DAD SP",
            "bytes": 1,
            "flags": "CY",
            "description": "Double add stack pointer to H-L"
        },
        {
            "opcode": "3A",
            "mnemonic": "LDA adr",
            "bytes": 3,
            "flags": "None",
            "description": "Load accumulator direct"
        },
        {
            "opcode": "3B",
            "mnemonic": "DCX SP",
            "bytes": 1,
            "flags": "None",
            "description": "Decrement stack pointer"
        },
        {
            "opcode": "3C",
            "mnemonic": "INR A",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Increment accumulator"
        },
        {
            "opcode": "3D",
            "mnemonic": "DCR A",
            "bytes": 1,
            "flags": "S,Z,AC,P",
            "description": "Decrement accumulator"
        },
        {
            "opcode": "3E",
            "mnemonic": "MVI A,d8",
            "bytes": 2,
            "flags": "None",
            "description": "Move immediate 8-bit data to accumulator"
        },
        {
            "opcode": "3F",
            "mnemonic": "CMC",
            "bytes": 1,
            "flags": "CY",
            "description": "Complement Carry flag"
        },
        {
            "opcode": "40",
            "mnemonic": "MOV B,B",
            "bytes": 1,
            "flags": "None",
            "description": "Move register B to register B"
        },
        {
            "opcode": "41",
            "mnemonic": "MOV B,C",
            "bytes": 1,
            "flags": "None",
            "description": "Move register C to register B"
        },
        {
            "opcode": "42",
            "mnemonic": "MOV B,D",
            "bytes": 1,
            "flags": "None",
            "description": "Move register D to register B"
        },
        {
            "opcode": "43",
            "mnemonic": "MOV B,E",
            "bytes": 1,
            "flags": "None",
            "description": "Move register E to register B"
        },
        {
            "opcode": "44",
            "mnemonic": "MOV B,H",
            "bytes": 1,
            "flags": "None",
            "description": "Move register H to register B"
        },
        {
            "opcode": "45",
            "mnemonic": "MOV B,L",
            "bytes": 1,
            "flags": "None",
            "description": "Move register L to register B"
        },
        {
            "opcode": "46",
            "mnemonic": "MOV B,M",
            "bytes": 1,
            "flags": "None",
            "description": "Move memory location pointed by H-L to register B"
        },
        {
            "opcode": "47",
            "mnemonic": "MOV B,A",
            "bytes": 1,
            "flags": "None",
            "description": "Move accumulator to register B"
        },
        {
            "opcode": "48",
            "mnemonic": "MOV C,B",
            "bytes": 1,
            "flags": "None",
            "description": "Move register B to register C"
        },
        {
            "opcode": "49",
            "mnemonic": "MOV C,C",
            "bytes": 1,
            "flags": "None",
            "description": "Move register C to register C"
        },
        {
            "opcode": "4A",
            "mnemonic": "MOV C,D",
            "bytes": 1,
            "flags": "None",
            "description": "Move register D to register C"
        },
        {
            "opcode": "4B",
            "mnemonic": "MOV C,E",
            "bytes": 1,
            "flags": "None",
            "description": "Move register E to register C"
        },
        {
            "opcode": "4C",
            "mnemonic": "MOV C,H",
            "bytes": 1,
            "flags": "None",
            "description": "Move register H to register C"
        },
        {
            "opcode": "4D",
            "mnemonic": "MOV C,L",
            "bytes": 1,
            "flags": "None",
            "description": "Move register L to register C"
        },
        {
            "opcode": "4E",
            "mnemonic": "MOV C,M",
            "bytes": 1,
            "flags": "None",
            "description": "Move memory location pointed by H-L to register C"
        },
        {
            "opcode": "4F",
            "mnemonic": "MOV C,A",
            "bytes": 1,
            "flags": "None",
            "description": "Move accumulator to register C"
        },
        {
            "opcode": "50",
            "mnemonic": "MOV D,B",
            "bytes": 1,
            "flags": "None",
            "description": "Move register B to register D"
        },
        {
            "opcode": "51",
            "mnemonic": "MOV D,C",
            "bytes": 1,
            "flags": "None",
            "description": "Move register C to register D"
        },
        {
            "opcode": "52",
            "mnemonic": "MOV D,D",
            "bytes": 1,
            "flags": "None",
            "description": "Move register D to register D"
        },
        {
            "opcode": "53",
            "mnemonic": "MOV D,E",
            "bytes": 1,
            "flags": "None",
            "description": "Move register E to register D"
        },
        {
            "opcode": "54",
            "mnemonic": "MOV D,H",
            "bytes": 1,
            "flags": "None",
            "description": "Move register H to register D"
        },
        {
            "opcode": "55",
            "mnemonic": "MOV D,L",
            "bytes": 1,
            "flags": "None",
            "description": "Move register L to register D"
        },
        {
            "opcode": "56",
            "mnemonic": "MOV D,M",
            "bytes": 1,
            "flags": "None",
            "description": "Move memory location pointed by H-L to register D"
        },
        {
            "opcode": "57",
            "mnemonic": "MOV D,A",
            "bytes": 1,
            "flags": "None",
            "description": "Move accumulator to register D"
        },
        {
            "opcode": "58",
            "mnemonic": "MOV E,B",
            "bytes": 1,
            "flags": "None",
            "description": "Move register B to register E"
        },
        {
            "opcode": "59",
            "mnemonic": "MOV E,C",
            "bytes": 1,
            "flags": "None",
            "description": "Move register C to register E"
        },
        {
            "opcode": "5A",
            "mnemonic": "MOV E,D",
            "bytes": 1,
            "flags": "None",
            "description": "Move register D to register E"
        },
        {
            "opcode": "5B",
            "mnemonic": "MOV E,E",
            "bytes": 1,
            "flags": "None",
            "description": "Move register E to register E"
        },
        {
            "opcode": "5C",
            "mnemonic": "MOV E,H",
            "bytes": 1,
            "flags": "None",
            "description": "Move register H to register E"
        },
        {
            "opcode": "5D",
            "mnemonic": "MOV E,L",
            "bytes": 1,
            "flags": "None",
            "description": "Move register L to register E"
        },
        {
            "opcode": "5E",
            "mnemonic": "MOV E,M",
            "bytes": 1,
            "flags": "None",
            "description": "Move memory location pointed by H-L to register E"
        },
        {
            "opcode": "5F",
            "mnemonic": "MOV E,A",
            "bytes": 1,
            "flags": "None",
            "description": "Move accumulator to register E"
        },
        {
            "opcode": "60",
            "mnemonic": "MOV H,B",
            "bytes": 1,
            "flags": "None",
            "description": "Move register B to register H"
        },
        {
            "opcode": "61",
            "mnemonic": "MOV H,C",
            "bytes": 1,
            "flags": "None",
            "description": "Move register C to register H"
        },
        {
            "opcode": "62",
            "mnemonic": "MOV H,D",
            "bytes": 1,
            "flags": "None",
            "description": "Move register D to register H"
        },
        {
            "opcode": "63",
            "mnemonic": "MOV H,E",
            "bytes": 1,
            "flags": "None",
            "description": "Move register E to register H"
        },
        {
            "opcode": "64",
            "mnemonic": "MOV H,H",
            "bytes": 1,
            "flags": "None",
            "description": "Move register H to register H"
        },
        {
            "opcode": "65",
            "mnemonic": "MOV H,L",
            "bytes": 1,
            "flags": "None",
            "description": "Move register L to register H"
        },
        {
            "opcode": "66",
            "mnemonic": "MOV H,M",
            "bytes": 1,
            "flags": "None",
            "description": "Move memory location pointed by H-L to register H"
        },
        {
            "opcode": "67",
            "mnemonic": "MOV H,A",
            "bytes": 1,
            "flags": "None",
            "description": "Move accumulator to register H"
        },
        {
            "opcode": "68",
            "mnemonic": "MOV L,B",
            "bytes": 1,
            "flags": "None",
            "description": "Move register B to register L"
        },
        {
            "opcode": "69",
            "mnemonic": "MOV L,C",
            "bytes": 1,
            "flags": "None",
            "description": "Move register C to register L"
        },
        {
            "opcode": "6A",
            "mnemonic": "MOV L,D",
            "bytes": 1,
            "flags": "None",
            "description": "Move register D to register L"
        },
        {
            "opcode": "6B",
            "mnemonic": "MOV L,E",
            "bytes": 1,
            "flags": "None",
            "description": "Move register E to register L"
        },
        {
            "opcode": "6C",
            "mnemonic": "MOV L,H",
            "bytes": 1,
            "flags": "None",
            "description": "Move register H to register L"
        },
        {
            "opcode": "6D",
            "mnemonic": "MOV L,L",
            "bytes": 1,
            "flags": "None",
            "description": "Move register L to register L"
        },
        {
            "opcode": "6E",
            "mnemonic": "MOV L,M",
            "bytes": 1,
            "flags": "None",
            "description": "Move memory location pointed by H-L to register L"
        },
        {
            "opcode": "6F",
            "mnemonic": "MOV L,A",
            "bytes": 1,
            "flags": "None",
            "description": "Move accumulator to register L"
        },
        {
            "opcode": "70",
            "mnemonic": "MOV M,B",
            "bytes": 1,
            "flags": "None",
            "description": "Move register B to memory location pointed by H-L"
        },
        {
            "opcode": "71",
            "mnemonic": "MOV M,C",
            "bytes": 1,
            "flags": "None",
            "description": "Move register C to memory location pointed by H-L"
        },
        {
            "opcode": "72",
            "mnemonic": "MOV M,D",
            "bytes": 1,
            "flags": "None",
            "description": "Move register D to memory location pointed by H-L"
        },
        {
            "opcode": "73",
            "mnemonic": "MOV M,E",
            "bytes": 1,
            "flags": "None",
            "description": "Move register E to memory location pointed by H-L"
        },
        {
            "opcode": "74",
            "mnemonic": "MOV M,H",
            "bytes": 1,
            "flags": "None",
            "description": "Move register H to memory location pointed by H-L"
        },
        {
            "opcode": "75",
            "mnemonic": "MOV M,L",
            "bytes": 1,
            "flags": "None",
            "description": "Move register L to memory location pointed by H-L"
        },
        {
            "opcode": "76",
            "mnemonic": "HLT",
            "bytes": 1,
            "flags": "None",
            "description": "Halt"
        },
        {
            "opcode": "77",
            "mnemonic": "MOV M,A",
            "bytes": 1,
            "flags": "None",
            "description": "Move accumulator to memory location pointed by H-L"
        },
        {
            "opcode": "78",
            "mnemonic": "MOV A,B",
            "bytes": 1,
            "flags": "None",
            "description": "Move register B to accumulator"
        },
        {
            "opcode": "79",
            "mnemonic": "MOV A,C",
            "bytes": 1,
            "flags": "None",
            "description": "Move register C to accumulator"
        },
        {
            "opcode": "7A",
            "mnemonic": "MOV A,D",
            "bytes": 1,
            "flags": "None",
            "description": "Move register D to accumulator"
        },
        {
            "opcode": "7B",
            "mnemonic": "MOV A,E",
            "bytes": 1,
            "flags": "None",
            "description": "Move register E to accumulator"
        },
        {
            "opcode": "7C",
            "mnemonic": "MOV A,H",
            "bytes": 1,
            "flags": "None",
            "description": "Move register H to accumulator"
        },
        {
            "opcode": "7D",
            "mnemonic": "MOV A,L",
            "bytes": 1,
            "flags": "None",
            "description": "Move register L to accumulator"
        },
        {
            "opcode": "7E",
            "mnemonic": "MOV A,M",
            "bytes": 1,
            "flags": "None",
            "description": "Move memory location pointed by H-L to accumulator"
        },
        {
            "opcode": "7F",
            "mnemonic": "MOV A,A",
            "bytes": 1,
            "flags": "None",
            "description": "Move accumulator to accumulator"
        },
        {
            "opcode": "80",
            "mnemonic": "ADD B",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register B to accumulator"
        },
        {
            "opcode": "81",
            "mnemonic": "ADD C",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register C to accumulator"
        },
        {
            "opcode": "82",
            "mnemonic": "ADD D",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register D to accumulator"
        },
        {
            "opcode": "83",
            "mnemonic": "ADD E",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register E to accumulator"
        },
        {
            "opcode": "84",
            "mnemonic": "ADD H",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register H to accumulator"
        },
        {
            "opcode": "85",
            "mnemonic": "ADD L",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register L to accumulator"
        },
        {
            "opcode": "86",
            "mnemonic": "ADD M",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add memory location pointed by H-L to accumulator"
        },
        {
            "opcode": "87",
            "mnemonic": "ADD A",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add accumulator to accumulator"
        },
        {
            "opcode": "88",
            "mnemonic": "ADC B",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register B to accumulator with carry"
        },
        {
            "opcode": "89",
            "mnemonic": "ADC C",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register C to accumulator with carry"
        },
        {
            "opcode": "8A",
            "mnemonic": "ADC D",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register D to accumulator with carry"
        },
        {
            "opcode": "8B",
            "mnemonic": "ADC E",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register E to accumulator with carry"
        },
        {
            "opcode": "8C",
            "mnemonic": "ADC H",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register H to accumulator with carry"
        },
        {
            "opcode": "8D",
            "mnemonic": "ADC L",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add register L to accumulator with carry"
        },
        {
            "opcode": "8E",
            "mnemonic": "ADC M",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add memory location pointed by H-L to accumulator with carry"
        },
        {
            "opcode": "8F",
            "mnemonic": "ADC A",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Add accumulator to accumulator with carry"
        },
        {
            "opcode": "90",
            "mnemonic": "SUB B",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register B from accumulator"
        },
        {
            "opcode": "91",
            "mnemonic": "SUB C",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register C from accumulator"
        },
        {
            "opcode": "92",
            "mnemonic": "SUB D",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register D from accumulator"
        },
        {
            "opcode": "93",
            "mnemonic": "SUB E",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register E from accumulator"
        },
        {
            "opcode": "94",
            "mnemonic": "SUB H",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register H from accumulator"
        },
        {
            "opcode": "95",
            "mnemonic": "SUB L",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register L from accumulator"
        },
        {
            "opcode": "96",
            "mnemonic": "SUB M",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract memory location pointed by H-L from accumulator"
        },
        {
            "opcode": "97",
            "mnemonic": "SUB A",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract accumulator from accumulator (result is 0)"
        },
        {
            "opcode": "98",
            "mnemonic": "SBB B",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register B from accumulator with borrow"
        },
        {
            "opcode": "99",
            "mnemonic": "SBB C",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register C from accumulator with borrow"
        },
        {
            "opcode": "9A",
            "mnemonic": "SBB D",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register D from accumulator with borrow"
        },
        {
            "opcode": "9B",
            "mnemonic": "SBB E",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register E from accumulator with borrow"
        },
        {
            "opcode": "9C",
            "mnemonic": "SBB H",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register H from accumulator with borrow"
        },
        {
            "opcode": "9D",
            "mnemonic": "SBB L",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract register L from accumulator with borrow"
        },
        {
            "opcode": "9E",
            "mnemonic": "SBB M",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract memory location pointed by H-L from accumulator with borrow"
        },
        {
            "opcode": "9F",
            "mnemonic": "SBB A",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract accumulator from accumulator with borrow (result depends on carry)"
        },
        {
            "opcode": "A0",
            "mnemonic": "ANA B",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(1)",
            "description": "Logical AND register B with accumulator"
        },
        {
            "opcode": "A1",
            "mnemonic": "ANA C",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(1)",
            "description": "Logical AND register C with accumulator"
        },
        {
            "opcode": "A2",
            "mnemonic": "ANA D",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(1)",
            "description": "Logical AND register D with accumulator"
        },
        {
            "opcode": "A3",
            "mnemonic": "ANA E",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(1)",
            "description": "Logical AND register E with accumulator"
        },
        {
            "opcode": "A4",
            "mnemonic": "ANA H",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(1)",
            "description": "Logical AND register H with accumulator"
        },
        {
            "opcode": "A5",
            "mnemonic": "ANA L",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(1)",
            "description": "Logical AND register L with accumulator"
        },
        {
            "opcode": "A6",
            "mnemonic": "ANA M",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(1)",
            "description": "Logical AND memory location pointed by H-L with accumulator"
        },
        {
            "opcode": "A7",
            "mnemonic": "ANA A",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(1)",
            "description": "Logical AND accumulator with accumulator"
        },
        {
            "opcode": "A8",
            "mnemonic": "XRA B",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical XOR register B with accumulator"
        },
        {
            "opcode": "A9",
            "mnemonic": "XRA C",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical XOR register C with accumulator"
        },
        {
            "opcode": "AA",
            "mnemonic": "XRA D",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical XOR register D with accumulator"
        },
        {
            "opcode": "AB",
            "mnemonic": "XRA E",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical XOR register E with accumulator"
        },
        {
            "opcode": "AC",
            "mnemonic": "XRA H",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical XOR register H with accumulator"
        },
        {
            "opcode": "AD",
            "mnemonic": "XRA L",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical XOR register L with accumulator"
        },
        {
            "opcode": "AE",
            "mnemonic": "XRA M",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical XOR memory location pointed by H-L with accumulator"
        },
        {
            "opcode": "AF",
            "mnemonic": "XRA A",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical XOR accumulator with accumulator (result is 0)"
        },
        {
            "opcode": "B0",
            "mnemonic": "ORA B",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical OR register B with accumulator"
        },
        {
            "opcode": "B1",
            "mnemonic": "ORA C",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical OR register C with accumulator"
        },
        {
            "opcode": "B2",
            "mnemonic": "ORA D",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical OR register D with accumulator"
        },
        {
            "opcode": "B3",
            "mnemonic": "ORA E",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical OR register E with accumulator"
        },
        {
            "opcode": "B4",
            "mnemonic": "ORA H",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical OR register H with accumulator"
        },
        {
            "opcode": "B5",
            "mnemonic": "ORA L",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical OR register L with accumulator"
        },
        {
            "opcode": "B6",
            "mnemonic": "ORA M",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical OR memory location pointed by H-L with accumulator"
        },
        {
            "opcode": "B7",
            "mnemonic": "ORA A",
            "bytes": 1,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical OR accumulator with accumulator"
        },
        {
            "opcode": "B8",
            "mnemonic": "CMP B",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Compare register B with accumulator"
        },
        {
            "opcode": "B9",
            "mnemonic": "CMP C",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Compare register C with accumulator"
        },
        {
            "opcode": "BA",
            "mnemonic": "CMP D",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Compare register D with accumulator"
        },
        {
            "opcode": "BB",
            "mnemonic": "CMP E",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Compare register E with accumulator"
        },
        {
            "opcode": "BC",
            "mnemonic": "CMP H",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Compare register H with accumulator"
        },
        {
            "opcode": "BD",
            "mnemonic": "CMP L",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Compare register L with accumulator"
        },
        {
            "opcode": "BE",
            "mnemonic": "CMP M",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Compare memory location pointed by H-L with accumulator"
        },
        {
            "opcode": "BF",
            "mnemonic": "CMP A",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Compare accumulator with accumulator (result is Z=1, CY=0)"
        },
        {
            "opcode": "C0",
            "mnemonic": "RNZ",
            "bytes": 1,
            "flags": "None",
            "description": "Return if Not Zero (Z=0)"
        },
        {
            "opcode": "C1",
            "mnemonic": "POP B",
            "bytes": 1,
            "flags": "None",
            "description": "Pop 16-bit data from stack to B-C"
        },
        {
            "opcode": "C2",
            "mnemonic": "JNZ adr",
            "bytes": 3,
            "flags": "None",
            "description": "Jump if Not Zero (Z=0)"
        },
        {
            "opcode": "C3",
            "mnemonic": "JMP adr",
            "bytes": 3,
            "flags": "None",
            "description": "Unconditional Jump"
        },
        {
            "opcode": "C4",
            "mnemonic": "CNZ adr",
            "bytes": 3,
            "flags": "None",
            "description": "Call if Not Zero (Z=0)"
        },
        {
            "opcode": "C5",
            "mnemonic": "PUSH B",
            "bytes": 1,
            "flags": "None",
            "description": "Push 16-bit data from B-C to stack"
        },
        {
            "opcode": "C6",
            "mnemonic": "ADI d8",
            "bytes": 2,
            "flags": "S,Z,AC,P,CY",
            "description": "Add immediate 8-bit data to accumulator"
        },
        {
            "opcode": "C7",
            "mnemonic": "RST 0",
            "bytes": 1,
            "flags": "None",
            "description": "Restart to address 0000H"
        },
        {
            "opcode": "C8",
            "mnemonic": "RZ",
            "bytes": 1,
            "flags": "None",
            "description": "Return if Zero (Z=1)"
        },
        {
            "opcode": "C9",
            "mnemonic": "RET",
            "bytes": 1,
            "flags": "None",
            "description": "Unconditional Return"
        },
        {
            "opcode": "CA",
            "mnemonic": "JZ adr",
            "bytes": 3,
            "flags": "None",
            "description": "Jump if Zero (Z=1)"
        },
        {
            "opcode": "CB",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation (Undocumented)"
        },
        {
            "opcode": "CC",
            "mnemonic": "CZ adr",
            "bytes": 3,
            "flags": "None",
            "description": "Call if Zero (Z=1)"
        },
        {
            "opcode": "CD",
            "mnemonic": "CALL adr",
            "bytes": 3,
            "flags": "None",
            "description": "Unconditional Call"
        },
        {
            "opcode": "CE",
            "mnemonic": "ACI d8",
            "bytes": 2,
            "flags": "S,Z,AC,P,CY",
            "description": "Add immediate 8-bit data to accumulator with carry"
        },
        {
            "opcode": "CF",
            "mnemonic": "RST 1",
            "bytes": 1,
            "flags": "None",
            "description": "Restart to address 0008H"
        },
        {
            "opcode": "D0",
            "mnemonic": "RNC",
            "bytes": 1,
            "flags": "None",
            "description": "Return if No Carry (CY=0)"
        },
        {
            "opcode": "D1",
            "mnemonic": "POP D",
            "bytes": 1,
            "flags": "None",
            "description": "Pop 16-bit data from stack to D-E"
        },
        {
            "opcode": "D2",
            "mnemonic": "JNC adr",
            "bytes": 3,
            "flags": "None",
            "description": "Jump if No Carry (CY=0)"
        },
        {
            "opcode": "D3",
            "mnemonic": "OUT d8",
            "bytes": 2,
            "flags": "None",
            "description": "Output data from accumulator to I/O port"
        },
        {
            "opcode": "D4",
            "mnemonic": "CNC adr",
            "bytes": 3,
            "flags": "None",
            "description": "Call if No Carry (CY=0)"
        },
        {
            "opcode": "D5",
            "mnemonic": "PUSH D",
            "bytes": 1,
            "flags": "None",
            "description": "Push 16-bit data from D-E to stack"
        },
        {
            "opcode": "D6",
            "mnemonic": "SUI d8",
            "bytes": 2,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract immediate 8-bit data from accumulator"
        },
        {
            "opcode": "D7",
            "mnemonic": "RST 2",
            "bytes": 1,
            "flags": "None",
            "description": "Restart to address 0010H"
        },
        {
            "opcode": "D8",
            "mnemonic": "RC",
            "bytes": 1,
            "flags": "None",
            "description": "Return if Carry (CY=1)"
        },
        {
            "opcode": "D9",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation (Undocumented)"
        },
        {
            "opcode": "DA",
            "mnemonic": "JC adr",
            "bytes": 3,
            "flags": "None",
            "description": "Jump if Carry (CY=1)"
        },
        {
            "opcode": "DB",
            "mnemonic": "IN d8",
            "bytes": 2,
            "flags": "None",
            "description": "Input data to accumulator from I/O port"
        },
        {
            "opcode": "DC",
            "mnemonic": "CC adr",
            "bytes": 3,
            "flags": "None",
            "description": "Call if Carry (CY=1)"
        },
        {
            "opcode": "DD",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation (Undocumented)"
        },
        {
            "opcode": "DE",
            "mnemonic": "SBI d8",
            "bytes": 2,
            "flags": "S,Z,AC,P,CY",
            "description": "Subtract immediate 8-bit data from accumulator with borrow"
        },
        {
            "opcode": "DF",
            "mnemonic": "RST 3",
            "bytes": 1,
            "flags": "None",
            "description": "Restart to address 0018H"
        },
        {
            "opcode": "E0",
            "mnemonic": "RPO",
            "bytes": 1,
            "flags": "None",
            "description": "Return if Parity Odd (P=0)"
        },
        {
            "opcode": "E1",
            "mnemonic": "POP H",
            "bytes": 1,
            "flags": "None",
            "description": "Pop 16-bit data from stack to H-L"
        },
        {
            "opcode": "E2",
            "mnemonic": "JPO adr",
            "bytes": 3,
            "flags": "None",
            "description": "Jump if Parity Odd (P=0)"
        },
        {
            "opcode": "E3",
            "mnemonic": "XTHL",
            "bytes": 1,
            "flags": "None",
            "description": "Exchange top of stack with H-L"
        },
        {
            "opcode": "E4",
            "mnemonic": "CPO adr",
            "bytes": 3,
            "flags": "None",
            "description": "Call if Parity Odd (P=0)"
        },
        {
            "opcode": "E5",
            "mnemonic": "PUSH H",
            "bytes": 1,
            "flags": "None",
            "description": "Push 16-bit data from H-L to stack"
        },
        {
            "opcode": "E6",
            "mnemonic": "ANI d8",
            "bytes": 2,
            "flags": "S,Z,P,CY(0),AC(1)",
            "description": "Logical AND immediate 8-bit data with accumulator"
        },
        {
            "opcode": "E7",
            "mnemonic": "RST 4",
            "bytes": 1,
            "flags": "None",
            "description": "Restart to address 0020H"
        },
        {
            "opcode": "E8",
            "mnemonic": "RPE",
            "bytes": 1,
            "flags": "None",
            "description": "Return if Parity Even (P=1)"
        },
        {
            "opcode": "E9",
            "mnemonic": "PCHL",
            "bytes": 1,
            "flags": "None",
            "description": "Load program counter with contents of H-L"
        },
        {
            "opcode": "EA",
            "mnemonic": "JPE adr",
            "bytes": 3,
            "flags": "None",
            "description": "Jump if Parity Even (P=1)"
        },
        {
            "opcode": "EB",
            "mnemonic": "XCHG",
            "bytes": 1,
            "flags": "None",
            "description": "Exchange H-L with D-E"
        },
        {
            "opcode": "EC",
            "mnemonic": "CPE adr",
            "bytes": 3,
            "flags": "None",
            "description": "Call if Parity Even (P=1)"
        },
        {
            "opcode": "ED",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation (Undocumented)"
        },
        {
            "opcode": "EE",
            "mnemonic": "XRI d8",
            "bytes": 2,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical XOR immediate 8-bit data with accumulator"
        },
        {
            "opcode": "EF",
            "mnemonic": "RST 5",
            "bytes": 1,
            "flags": "None",
            "description": "Restart to address 0028H"
        },
        {
            "opcode": "F0",
            "mnemonic": "RP",
            "bytes": 1,
            "flags": "None",
            "description": "Return if Positive (S=0)"
        },
        {
            "opcode": "F1",
            "mnemonic": "POP PSW",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Pop 16-bit data from stack to PSW (A and Flags)"
        },
        {
            "opcode": "F2",
            "mnemonic": "JP adr",
            "bytes": 3,
            "flags": "None",
            "description": "Jump if Positive (S=0)"
        },
        {
            "opcode": "F3",
            "mnemonic": "DI",
            "bytes": 1,
            "flags": "None",
            "description": "Disable Interrupts"
        },
        {
            "opcode": "F4",
            "mnemonic": "CP adr",
            "bytes": 3,
            "flags": "None",
            "description": "Call if Positive (S=0)"
        },
        {
            "opcode": "F5",
            "mnemonic": "PUSH PSW",
            "bytes": 1,
            "flags": "S,Z,AC,P,CY",
            "description": "Push 16-bit data from PSW (A and Flags) to stack"
        },
        {
            "opcode": "F6",
            "mnemonic": "ORI d8",
            "bytes": 2,
            "flags": "S,Z,P,CY(0),AC(0)",
            "description": "Logical OR immediate 8-bit data with accumulator"
        },
        {
            "opcode": "F7",
            "mnemonic": "RST 6",
            "bytes": 1,
            "flags": "None",
            "description": "Restart to address 0030H"
        },
        {
            "opcode": "F8",
            "mnemonic": "RM",
            "bytes": 1,
            "flags": "None",
            "description": "Return if Minus (S=1)"
        },
        {
            "opcode": "F9",
            "mnemonic": "SPHL",
            "bytes": 1,
            "flags": "None",
            "description": "Load stack pointer with contents of H-L"
        },
        {
            "opcode": "FA",
            "mnemonic": "JM adr",
            "bytes": 3,
            "flags": "None",
            "description": "Jump if Minus (S=1)"
        },
        {
            "opcode": "FB",
            "mnemonic": "EI",
            "bytes": 1,
            "flags": "None",
            "description": "Enable Interrupts"
        },
        {
            "opcode": "FC",
            "mnemonic": "CM adr",
            "bytes": 3,
            "flags": "None",
            "description": "Call if Minus (S=1)"
        },
        {
            "opcode": "FD",
            "mnemonic": "NOP",
            "bytes": 1,
            "flags": "None",
            "description": "No operation (Undocumented)"
        },
        {
            "opcode": "FE",
            "mnemonic": "CPI d8",
            "bytes": 2,
            "flags": "S,Z,AC,P,CY",
            "description": "Compare immediate 8-bit data with accumulator"
        },
        {
            "opcode": "FF",
            "mnemonic": "RST 7",
            "bytes": 1,
            "flags": "None",
            "description": "Restart to address 0038H"
        }
    ]
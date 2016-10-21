﻿CREATE TABLE TP
(
  TP_1 varchar(30), 
  TP_2 varchar(15),
  TP_3 varchar(15),
  TP_4 varchar (15),
  CONSTRAINT pkTP PRIMARY KEY (TP_4)
);



CREATE TABLE TU
(
  TU_1 varchar(15),
  TU_2 varchar(15),
  TU_3 numeric(1),
  CONSTRAINT fkTU FOREIGN KEY (TU_1) REFERENCES TP (TP_4)
);


CREATE TABLE TC(
TC_1 SERIAL,
TC_2 DATE,
TC_3 TEXT,
TC_4 DATE,
TC_5 TEXT,
TC_6 TEXT, 
TC_7 TEXT,
TC_8 TEXT,
TC_9 VARCHAR(15),
TC_10 TEXT,
TC_11 TEXT,
CONSTRAINT pkTC PRIMARY KEY(TC_1),
CONSTRAINT fkTC FOREIGN KEY (TC_9) REFERENCES TP (TP_4)
);



CREATE TABLE TD(
TD_1 INTEGER,
TD_2 INTEGER,
CONSTRAINT fkTD1 FOREIGN KEY (TD_1) REFERENCES TC (TC_1),
CONSTRAINT fkTD2 FOREIGN KEY (TD_2) REFERENCES TC (TC_1),
CONSTRAINT pkTD PRIMARY KEY (TD_1, TD_2)
);


CREATE TABLE TA(
TA_1 INTEGER,
TA_2 DATE,
TA_3 DATE,
TA_4 NUMERIC(1),
CONSTRAINT fkTA1 FOREIGN KEY (TA_1) REFERENCES TC (TC_1),
CONSTRAINT pkTA PRIMARY KEY (TA_1, TA_2)
);


insert into TP values ('Grettel','Castro','Cruz','1');

# object-mathematical-operator

���p���͔����l�^���C�u�����ł�
�I�u�W�F�N�g�̎l�����Z�������ŋL�q�ł��܂�

�����������Ɏg�p���܂�

var aObject = {paramA: 1, paramB: 2, paramC: 3, paramD: 4, paramE: 5, paramF: 6, paramAObjectOnly: 8};
var bObject = {paramA: 5, paramB: 6, paramC: 7, paramD: 8, paramE: 9, paramF: 10, paramBObjectOnly: 9};

var calcObject = aObject.mathematicalOperation(
  bObject,
  ["+", "paramA", "paramB", "paramAObjectOnly"],
  ["-", "paramC", "paramD", "paramBObjectOnly"],
  ["*", "paramE"],
  ["/", "paramF"]
);
cosole.log(calcObject);
/*
{
  paramA: 6,
  paramAObjectOnly: 8,
  paramB: 8,
  paramBObjectOnly: 9,
  paramC: -4,
  paramD: -4,
  paramE: 45,
  paramF: 0.6
}
*/

��j��I�֐��Ȃ̂Ŏ��s���ʂ�ϐ��Ɋi�[���܂�
��1�����F�d�˂邽�߂̃I�u�W�F�N�g
��2�����ȍ~�F�z��i0�Ԗڂ̒l�͎l�����Z�̋L���A�ȍ~�͎��R�Ɍv�Z�������p�����[�^�����L�q�j
�L�ڂ̂Ȃ��p�����[�^�[�͕Ԃ��I�u�W�F�N�g�ɂ͊܂܂�܂���
����̃p�����[�^�[���w�肳�ꂽ�ꍇ�͌�ɋL�ڂ��ꂽ���̂��D�悳��܂�
�Е��ɂ������݂��Ȃ��p�����[�^�[�͌v�Z���ꂸ�A���̒l�𗘗p���܂�
�e�l�����Z�͎��R�ɒ�`�ł��܂�
�E+�FObject.prototype.plus
�E-�FObject.prototype.minus
�E*�FObject.prototype.times
�E/�FObject.prototype.division
var calcObject = aObject.mathematicalOperation(
  bObject,
  ["+", "paramA", "paramB", "paramAObjectOnly"],
  ["-", "paramC", "paramD", "paramBObjectOnly"],
  ["*", "paramE"],
  ["/", "paramF"]
);

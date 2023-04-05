import { CellIdentifier } from '@/appflowy_app/stores/effects/database/cell/cell_bd_svc';
import { CellCache } from '@/appflowy_app/stores/effects/database/cell/cell_cache';
import { FieldController } from '@/appflowy_app/stores/effects/database/field/field_controller';
import { useState, useEffect } from 'react';
import { useCell } from '../../_shared/database-hooks/useCell';
import { EditCellText } from '../../_shared/EditRow/EditCellText';

export default function GridTextCell({
  cellIdentifier,
  cellCache,
  fieldController,
}: {
  cellIdentifier: CellIdentifier;
  cellCache: CellCache;
  fieldController: FieldController;
}) {
  const { data, cellController } = useCell(cellIdentifier, cellCache, fieldController);

  return (
    <div className='w-full'>
      {cellController && <EditCellText data={data as string | undefined} cellController={cellController}></EditCellText>}
    </div>
  );
}
